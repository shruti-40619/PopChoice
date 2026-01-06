# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files (including backend folder)
COPY . .

# Expose correct port
EXPOSE 3001

# Start backend
CMD ["npm", "start"]
