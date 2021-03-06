#FROM cypress/base:16.14.0 as TEST
#WORKDIR /src
#COPY package.json .
#COPY . /src
#COPY cypress.json cypress ./
#COPY cypress ./cypress
#ENV CI=true
#RUN yarn install --frozen-lockfile
#RUN yarn ci

FROM node:16.14.0-alpine AS builder
COPY . /src
WORKDIR /src
RUN yarn && yarn test:ci && yarn build

FROM nginx:1.17.6
COPY --from=builder /src/build/ /html/
COPY nginx.conf mime.types /etc/nginx/
