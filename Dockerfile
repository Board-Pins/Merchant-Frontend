FROM node:20.19.1-alpine AS build

# Set working directory
WORKDIR /boardpins

# Install dependencies needed for node-gyp
RUN apk add --no-cache python3 make g++

# Copy package files first for better caching
COPY package*.json ./

# Use npm ci for faster, more reliable builds
RUN npm ci --no-audit --no-fund

# Install rollup explicitly to avoid platform-specific issues
RUN npm install --save-dev @rollup/rollup-linux-x64-musl

# Install terser required by Vite
RUN npm install --save-dev terser

# Copy the rest of the application
COPY . .

# Build the Vite project
RUN npm run build

# Production stage - using nginx for better performance
FROM nginx:alpine AS production

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build stage
COPY --from=build /boardpins/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Command to run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]


