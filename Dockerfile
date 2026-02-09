# Étape 1 : build Angular
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Angular build
RUN npm run build -- --configuration production

# Étape 2 : serveur Nginx
FROM nginx:alpine
COPY --from=build /app/dist/tn-airbnb-web/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
