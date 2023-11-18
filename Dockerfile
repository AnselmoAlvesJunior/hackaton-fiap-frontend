FROM node:16.15-alpine as build
 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean -f
COPY . ./
RUN npm install && npm run build
 
FROM nginx:1.17-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]