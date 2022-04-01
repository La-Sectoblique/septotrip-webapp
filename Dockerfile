# Build stage
FROM node:16-alpine AS builder

ARG NPM_TOKEN
ARG MAPBOX_TOKEN
ARG BASE_URL

ENV MAPBOX_TOKEN=$MAPBOX_TOKEN
ENV TOKEN=$NPM_TOKEN
ENV BASE_URL=$BASE_URL

RUN apk add --no-cache gettext

WORKDIR /opt/webapp

COPY package.json /opt/webapp/package.json
COPY yarn.lock /opt/webapp/yarn.lock
COPY .npmrc.example /opt/webapp/.npmrc.example

RUN envsubst < .npmrc.example > .npmrc

RUN yarn install

COPY src/ /opt/webapp/src/
COPY tsconfig*.json /opt/webapp/
COPY angular.json /opt/webapp/angular.json
COPY karma.conf.js /opt/webapp/karma.conf.js

RUN envsubst < src/environments/environment.template.ts > src/environments/environment.ts

RUN yarn build 

# Execute stage
FROM nginx:alpine

COPY --from=builder /opt/webapp/dist/ /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]