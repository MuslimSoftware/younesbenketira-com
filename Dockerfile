# Multi-stage build for React/Vite application

# Stage 1: Build the application
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for Docker layer caching)
# This means if only source code changes, npm install won't re-run
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application for production
# This runs: tsc && vite build (from package.json)
RUN npm run build

# Stage 2: Production server with Nginx
FROM nginx:alpine AS production

# Copy built static files from build stage to Nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx server
# daemon off keeps Nginx running in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]