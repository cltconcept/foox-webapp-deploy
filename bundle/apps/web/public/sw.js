// Service worker Foox — quatre régimes, choisis par nature de requête :
// - API : réseau uniquement (données authentifiées, jamais mises en cache) ;
// - /lancement (le shell de démarrage de la PWA) : CACHE d'abord, remis à
//   jour en arrière-plan — c'est lui qui écourte l'écran système : la coquille
//   est peinte en ~100 ms, le splash joue pendant que le reste charge. Elle
//   ne porte AUCUNE donnée, un shell périmé est sans conséquence produit ;
// - autres navigations : réseau d'abord (navigation preload), /offline en secours ;
// - statiques (assets, icônes, _next/static) : cache d'abord — ils sont
//   versionnés par leur chemin, un contenu périmé est impossible.
// Le nom du cache est versionné : le déploiement suivant nettoie l'ancien.
//
// La version vient du BUILD (audit du 2026-11-10, FRT-05), plus d'une constante
// à incrémenter à la main : la page enregistre `/sw.js?v=<version du build>`
// (cf. `src/lib/service-worker.ts`), et ce script lit son propre `?v=`. Un
// build neuf = une adresse de script neuve = un service worker neuf, qui ouvre
// son cache et purge les précédents à l'activation.
// Sans `?v=` — ou avec une valeur qui n'a pas la forme attendue — le nom par
// défaut ci-dessous sert de repli ; lui ne change jamais tout seul.

const CACHE_PAR_DEFAUT = "foox-v2026-11-10-1";
const VERSION = new URL(self.location.href).searchParams.get("v") ?? "";
const CACHE = /^[\w.-]{1,64}$/.test(VERSION) ? `foox-${VERSION}` : CACHE_PAR_DEFAUT;
// Tout ce que le splash affiche à la première frame, plus les deux coquilles.
// icon-512 (233 Ko) n'y est plus : le splash montre l'icône de 192 px depuis
// le 2026-11-10 (en WebP : 10 Ko), et l'icône d'installation est lue par le
// système, pas ici.
const PRECACHE = [
  "/lancement",
  "/offline",
  "/manifest.webmanifest",
  "/icons/icon-192.webp",
  "/assets/mascotte/confiance.webp",
];

self.addEventListener("install", (evenement) => {
  evenement.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (evenement) => {
  evenement.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((noms) => Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n)))),
      // Le preload lance la requête réseau PENDANT le démarrage du SW au lieu
      // d'attendre après lui — gratuit là où c'est supporté.
      self.registration.navigationPreload?.enable().catch(() => {}),
    ]).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (evenement) => {
  const { request } = evenement;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Données et auth : toujours le réseau, jamais de cache.
  if (url.pathname.startsWith("/api/")) return;

  // Le shell de lancement : cache d'abord — la peinture quasi instantanée au
  // démarrage de la PWA est tout son intérêt — et rafraîchi en arrière-plan à
  // chaque passage. Son HTML référence des chunks hachés : ceux du shell
  // précédent restent servis par le régime « statiques » ci-dessous jusqu'à
  // la revalidation, un lancement n'est donc jamais cassé par un déploiement.
  if (request.mode === "navigate" && url.pathname === "/lancement") {
    evenement.respondWith(
      caches.match("/lancement").then((present) => {
        const frais = fetch(request)
          .then((reponse) => {
            if (reponse.ok) {
              const copie = reponse.clone();
              caches.open(CACHE).then((cache) => cache.put("/lancement", copie));
            }
            return reponse;
          })
          .catch(() => caches.match("/offline").then((r) => r ?? Response.error()));
        if (present) {
          frais.catch(() => {});
          return present;
        }
        return frais;
      }),
    );
    return;
  }

  // Navigations : réseau d'abord (preload s'il est prêt), /offline en secours.
  if (request.mode === "navigate") {
    evenement.respondWith(
      (async () => {
        try {
          const prechargee = await evenement.preloadResponse;
          if (prechargee) return prechargee;
          return await fetch(request);
        } catch {
          const secours = await caches.match("/offline");
          return secours ?? Response.error();
        }
      })(),
    );
    return;
  }

  // Statiques : cache d'abord, réseau en complément.
  // `/assets/` n'est PAS versionné par son chemin : y remplacer un fichier à
  // nom égal (fait le 2026-08-11 sur les avatars) laissait l'ancien servi tant
  // que `CACHE` ne changeait pas. La version du build porte désormais
  // l'empreinte du contenu de `public/` (cf. `next.config.ts`) : remplacer un
  // fichier change le nom du cache au build suivant, sans rien éditer ici.
  const statique =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/manifest.webmanifest";
  // Seule une réponse RÉUSSIE entre au cache (audit du 2026-11-10, FRT-05) :
  // une 502 reçue pendant un déploiement y restait servie indéfiniment, à la
  // place du fichier. Une réponse en erreur est rendue telle quelle, et la
  // requête suivante retente le réseau.
  if (statique) {
    evenement.respondWith(
      caches.match(request).then(
        (present) =>
          present ??
          fetch(request).then((reponse) => {
            if (reponse.ok) {
              const copie = reponse.clone();
              caches.open(CACHE).then((cache) => cache.put(request, copie));
            }
            return reponse;
          }),
      ),
    );
  }
});
