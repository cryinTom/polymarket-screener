FROM oven/bun:alpine
WORKDIR /usr/src/app
COPY . .
RUN bun install
