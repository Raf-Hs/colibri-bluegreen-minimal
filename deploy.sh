#!/usr/bin/env bash
set -e

COLOR=$1

if [ "$COLOR" != "blue" ] && [ "$COLOR" != "green" ]; then
  echo "Uso: ./deploy.sh [blue|green]"
  exit 1
fi

echo ">> Construyendo imagen para entorno $COLOR"
docker compose build api-$COLOR

echo ">> Levantando contenedor $COLOR sin tirar el otro"
docker compose up -d api-$COLOR

echo ">> Actualizando Nginx para apuntar a $COLOR"
cp nginx.$COLOR.conf nginx.active.conf
docker compose up -d nginx
docker exec colibri-nginx nginx -s reload

echo ">> Switch completo. Entorno activo: $COLOR"
