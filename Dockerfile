FROM node:22-alpine
COPY bundle/ /app/
WORKDIR /app/apps/web
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
