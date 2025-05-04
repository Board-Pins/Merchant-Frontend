FROM node:16-alpine

# Set the working directory in the container
WORKDIR /boardpins

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vite project
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5000"]
