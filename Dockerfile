FROM node:lts-alpine as base

# définit le dossier 'app' comme dossier de travail
WORKDIR /app

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# installe les dépendances du projet
RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

FROM base as test
CMD [ "npm", "run" , "test:unit"]

FROM base as dev
EXPOSE 4000
CMD [ "npm", "run" , "serve"]

FROM base as prod

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

# construit l'app pour la production en la minifiant
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]