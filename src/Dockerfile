FROM node:14.15 AS build-step 

RUN mkdir -p /app

WORKDIR /app

COPY package.json/app

RUN npm install

COPY . /app

RUN npm build --prod

FROM nginx:alphine


COPY --from=build-step /app/dist/voting-app  /usr/share/nginx/html