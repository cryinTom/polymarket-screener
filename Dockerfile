FROM oven/bun:alpine
WORKDIR /usr/src/app
COPY . .
RUN bunx prisma generate
RUN bun install
