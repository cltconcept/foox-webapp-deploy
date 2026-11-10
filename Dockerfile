# L'image de production de la webapp — copiée telle quelle à la racine du dépôt
# de déploiement par `scripts/deploy_prod.sh`, à côté du dossier `bundle/`.
#
# Versionnée ICI (dépôt privé) : jusqu'au 2026-11-10 ce fichier ne vivait que
# dans le dépôt de déploiement, hors de toute relecture. Deux changements ce
# jour-là (audit, QA-09 et SEC-05) :
#   · Node 24, la version que le monorepo déclare (`engines`), au lieu de 22 ;
#   · le serveur ne tourne plus en root : une faille dans la webapp ne donne
#     plus les pleins pouvoirs dans le conteneur.
# `--chown` : Next écrit son cache de pages sous `.next/` — l'utilisateur
# `node` doit pouvoir y écrire.
FROM node:24-alpine
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
COPY --chown=node:node bundle/ /app/
WORKDIR /app/apps/web
USER node
EXPOSE 3000
CMD ["node", "server.js"]
