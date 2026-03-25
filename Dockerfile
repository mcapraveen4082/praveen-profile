# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove default nginx content (important!)
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/out /usr/share/nginx/html

# Copy custom nginx config (supports Next static routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Optional: reduce image size & remove unnecessary files
RUN rm -rf /etc/nginx/conf.d/default.conf.bak

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]