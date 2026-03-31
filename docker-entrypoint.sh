#!/bin/sh
set -e

mkdir -p /etc/nginx/ssl

# If certs are not mounted/provided, generate a temporary self-signed cert.
if [ ! -f /etc/nginx/ssl/fullchain.pem ] || [ ! -f /etc/nginx/ssl/privkey.pem ]; then
  echo "SSL certs not found at /etc/nginx/ssl, generating self-signed certificate..."
  openssl req -x509 -nodes -days 365 \
    -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/privkey.pem \
    -out /etc/nginx/ssl/fullchain.pem \
    -subj "/C=IN/ST=Karnataka/L=Bengaluru/O=LocalDev/OU=Portfolio/CN=localhost"
fi

# Run Next.js standalone server behind Nginx.
PORT=3000 node server.js &

exec nginx -g "daemon off;"

