# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app

# Alleen package.json en package-lock.json voor snellere cache
COPY package*.json ./
RUN npm ci

# Kopieer de rest van de code en bouw
COPY . .
RUN npm run build

# Stage 2: Run met Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Kopieer alleen de Nginx-config
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Kopieer de build output van de vorige stage
COPY --from=build /app/dist .

# Expose en start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]