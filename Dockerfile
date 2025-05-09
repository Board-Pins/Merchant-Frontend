FROM node:20.19.1-alpine AS build

# Set working directory
WORKDIR /boardpins

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies with production flag
RUN npm ci --production=false

# Copy the rest of the application
COPY . .

# Build the Vite project
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

sudo mkdir -p /home/test

# Install serve for production
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /boardpins/dist ./dist

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5000"]

