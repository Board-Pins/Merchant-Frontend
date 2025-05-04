FROM node:18-alpine

# Set the working directory in the container
WORKDIR /boardpins

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies with a retry mechanism and network timeout
RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-retry-maxtimeout 60000 && \
    npm install --no-fund --no-audit --loglevel verbose

# Copy the rest of the application code to the working directory
COPY . .

# Debug the file structure to ensure all files are present
RUN ls -la && \
    ls -la src/

# Build the Vite project with more verbose output
RUN npm run build || (echo "Build failed, showing directory structure:" && find src -type f | sort)

# Use the built-in serve capability instead of installing serve globally
EXPOSE 5000

# Command to run the app using npx to avoid global installation
CMD ["npx", "serve", "-s", "dist", "-l", "5000"]


