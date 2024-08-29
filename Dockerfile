ARG NODE_IMAGE=node:22-alpine3.19

FROM $NODE_IMAGE AS base

ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apk add --no-cache dumb-init chromium nss freetype harfbuzz ca-certificates ttf-freefont postgresql-client

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN mkdir -p /spotify-api && chown node:node /spotify-api
WORKDIR /spotify-api
USER node

RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

RUN npm install
