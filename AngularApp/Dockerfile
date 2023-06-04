# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY AngularApp/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY AngularApp .

# Build the application
RUN npm run build


EXPOSE 4200

# Start the Angular application
CMD npm start
