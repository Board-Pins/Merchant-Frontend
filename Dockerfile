FROM node:20.19.1-alpine AS build

# Set working directory
WORKDIR /boardpins
# Copy package files first for better caching
COPY package*.json ./

# Install required rollup package explicitly
RUN npm install @rollup/rollup-linux-x64-musl

# Use npm install instead of npm ci to resolve dependency issues
RUN npm install

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
