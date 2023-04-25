# Start the Angular development server
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY . .

# Install the dependencies
RUN npm install
RUN npm install -g @angular/cli@15.2.6
RUN ng config -g cli.warnings.versionMismatch false

# Copy the rest of the application files to the container


# Expose port 4200 for the Angular development server
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve"]
