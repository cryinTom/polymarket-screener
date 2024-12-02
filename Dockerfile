FROM oven/bun:latest
COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node

WORKDIR /usr/src/app
COPY . .
# RUN npx prisma migrate dev --name init
RUN bunx prisma migrate dev --name init
RUN bunx prisma generate
RUN bun install
