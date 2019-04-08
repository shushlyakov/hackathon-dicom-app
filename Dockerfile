FROM node:10-alpine

MAINTAINER Mike Ivanov, mike.ivanou@gmail.com

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8081

CMD ["npm", "run", "serve"]
