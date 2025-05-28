# Etapa 1: Construcción
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor de producción con nginx
FROM nginx:stable-alpine

# Copia el build a nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Elimina la configuración por defecto de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia configuración personalizada
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
