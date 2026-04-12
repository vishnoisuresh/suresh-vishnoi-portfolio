# Stage 1: Build the static Next.js site
FROM registry.access.redhat.com/ubi8/nodejs-20 AS builder
USER root
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy source code and build the export
COPY . .
RUN npm run build

# Stage 2: Serve using NGINX (using Alpine for extreme lightweight, or Red Hat UBI if strictly preferred)
FROM docker.io/library/nginx:alpine

# Copy the statically exported Next.js files to NGINX's serving directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]