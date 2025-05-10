FROM node:20.19.1-alpine AS build

# Set working directory
WORKDIR /boardpins

# Clean npm cache and add temporary space-saving measures
RUN npm cache clean --force && \
    rm -rf /tmp/* /var/cache/apk/*

# Copy package files first for better caching
COPY package*.json ./

# Use npm install instead of npm ci to resolve dependency issues
# The --legacy-peer-deps flag helps with compatibility issues
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the Vite project
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Install serve for production
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /boardpins/dist ./dist

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5000"]







