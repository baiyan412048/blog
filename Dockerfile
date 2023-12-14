# Use the official Node.js 18 image based on Alpine Linux as the base image
FROM node:18-alpine

# Install pnpm globally using npm
RUN npm install -g pnpm

# Set the environment variable to development
ENV NODE_ENV=development

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install project dependencies using pnpm
RUN pnpm install

# Copy the entire project files to the working directory
COPY . ./

# Expose port 4500 to the outside world
EXPOSE 4500

# Define the default command to run the application (assumes 'pnpm dev' is the start script)
CMD ["pnpm", "dev"]

# docker build -t blog-nextjs .
# docker run -p 3000:3000 blog-nextjs
