# Build stage
FROM node:16-alpine AS builder

ARG MAPBOX_TOKEN

ENV MAPBOX_TOKEN=$MAPBOX_TOKEN

WORKDIR /opt/webapp

COPY package.json /opt/webapp/package.json
COPY yarn.lock /opt/webapp/yarn.lock

RUN yarn install

COPY src/ /opt/webapp/src/
COPY tsconfig*.json /opt/webapp/
COPY angular.json /opt/webapp/angular.json
COPY karma.conf.js /opt/webapp/karma.conf.js

RUN apk add --no-cache gettext

RUN envsubst < src/environments/environment.template.ts > src/environments/environment.prod.ts

RUN yarn build 

# Execute stage
FROM nginx:alpine

COPY --from=builder /opt/webapp/dist/ /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]