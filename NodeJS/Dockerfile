# Set the base image to use
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY . .

# Install dependencies
RUN npm install

# Copy the rest of the backend code to the container


# Expose the port used by the backend
EXPOSE 3000

# Start the backend
CMD ["node","index.js"]
