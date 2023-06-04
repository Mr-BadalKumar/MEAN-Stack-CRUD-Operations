# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY AngularApp/package*.json ./

RUN apt-get update && apt-get install build-essential -y

# Install dependencies
RUN npm install
RUN npm install -g @angular/cli@15.2.6
RUN ng config -g cli.warnings.versionMismatch false

# Copy the rest of the application code to the working directory
COPY AngularApp .

# Build the application
RUN npm run build


EXPOSE 4200

# Start the Angular application
CMD npm start
