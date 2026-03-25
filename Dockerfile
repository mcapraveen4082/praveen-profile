# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage (Next.js standalone server)
FROM node:20-alpine AS runner

WORKDIR /app

# Next standalone output lives here after `next build`
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Keep container port at 80 to match existing ECS task port expectations.
ENV PORT=80
EXPOSE 80

CMD ["node", "server.js"]