FROM node:20.19.1-alpine

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

# Expose the Vite development port
EXPOSE 5000

# Start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


