// Service worker Foox — trois régimes, choisis par nature de requête :
// - API : réseau uniquement (données authentifiées, jamais mises en cache) ;
// - navigations : réseau d'abord, page /offline en secours ;
// - statiques (assets, icônes, _next/static) : cache d'abord — ils sont
//   versionnés par leur chemin, un contenu périmé est impossible.
// Le nom du cache est versionné : le déploiement suivant nettoie l'ancien.

const CACHE = "foox-v2026-08-11-2";
const PRECACHE = [
  "/offline",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (evenement) => {
  evenement.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (evenement) => {
  evenement.waitUntil(
    caches
      .keys()
      .then((noms) => Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (evenement) => {
  const { request } = evenement;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Données et auth : toujours le réseau, jamais de cache.
  if (url.pathname.startsWith("/api/")) return;

  // Navigations : réseau d'abord, page hors-ligne en secours.
  if (request.mode === "navigate") {
    evenement.respondWith(
      fetch(request).catch(() => caches.match("/offline").then((r) => r ?? Response.error())),
    );
    return;
  }

  // Statiques : cache d'abord, réseau en complément.
  // ⚠️ `/assets/` n'est PAS versionné par son chemin : y remplacer un fichier
  // à nom égal (fait le 2026-08-11 sur les avatars) laisse l'ancien servi tant
  // que `CACHE` ne change pas. Bumper `CACHE` à chaque remplacement d'asset.
  const statique =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/manifest.webmanifest";
  if (statique) {
    evenement.respondWith(
      caches.match(request).then(
        (present) =>
          present ??
          fetch(request).then((reponse) => {
            const copie = reponse.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copie));
            return reponse;
          }),
      ),
    );
  }
});
