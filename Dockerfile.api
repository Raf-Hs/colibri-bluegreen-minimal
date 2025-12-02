FROM node:20-alpine

WORKDIR /app

# Instalar dependencias de producción
COPY backend/package*.json ./
RUN npm install --only=production

# Copiar código
COPY backend/. .

ENV PORT=4000
EXPOSE 4000

CMD ["node", "src/server.js"]
