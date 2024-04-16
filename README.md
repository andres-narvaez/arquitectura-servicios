# E-commerce Platform

Turbo monorepo for E-commerce Platform, including microservices.

## Requirements

- nodejs
- pmpn: [install pnpm](https://pnpm.io/installation)

#### Running microservices

```bash
pnpm install
pnpm build
pnpm dev
```

- servicio-pagos: running at [localhost:3001](http://localhost::3001)
- servicio-pedidos: running at [localhost:3000](http://localhost::3000)

## Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create ecommerce_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yaml build

# Start prod in detached mode
docker-compose -f docker-compose.yaml up -d
```

Open:

- servicio-pagos: http://localhost:3000
- servicio-pedidos: http://localhost:3001

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```
