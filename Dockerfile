# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage (Next.js standalone server + Nginx SSL reverse proxy)
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache nginx openssl

# Next standalone output lives here after `next build`
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Nginx SSL reverse proxy config + startup script.
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY ssl/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY ssl/privkey.pem /etc/nginx/ssl/privkey.pem
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh && mkdir -p /run/nginx /etc/nginx/ssl

# Optional mount path for real certs (overrides copied self-signed certs):
# - /etc/nginx/ssl/fullchain.pem
# - /etc/nginx/ssl/privkey.pem

EXPOSE 80
EXPOSE 443

CMD ["/docker-entrypoint.sh"]