# Colibri Bluegreen Minimal – Infraestructura básica

Proyecto para la materia **Arquitectura de Despliegue, Pruebas y Monitoreo de Aplicaciones**.

Incluye:

- API Node.js + Express.
- Pruebas de integración con Jest y Supertest (al menos 3 pruebas).
- Contenerización con Docker.
- Nginx como proxy inverso hacia la API.
- Despliegue en una máquina virtual de Google Cloud.

## Requisitos

- Node.js 20+
- Docker y Docker Compose
- Máquina virtual en Google Cloud (Ubuntu)

## Ejecutar pruebas

```bash
cd backend
npm install
npm test

## Levantar con Docker
docker compose up -d --build

##La API queda disponible en:

GET /health

GET /api/info

POST /api/echo