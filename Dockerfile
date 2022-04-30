FROM node:latest AS dev

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=dev /app/build /usr/share/nginx/html
COPY --from=dev /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=dev /app/build/ .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
