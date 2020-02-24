FROM node:12

WORKDIR /app

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

ENV HOST 0.0.0.0
EXPOSE 4444
