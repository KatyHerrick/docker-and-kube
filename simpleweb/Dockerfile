# Use slimmest node base image
FROM node:alpine

# Set dir that all following commands are relative to
# /usr/app is one safe place to put apps, but there are others
WORKDIR /usr/app

# Copy only the package.json to container to take advantage of
# caching. As long as as the packages haven't changed, the
# `npm install` step can be taken from a cached build.
COPY ./package.json ./
# Install project dependencies
RUN npm install

# Copy local files to container
COPY ./ ./

# Default command
CMD ["npm", "start"]