FROM node:15.14.0-alpine3.10

WORKDIR /app

# Copy index.js and the dependencie files.
COPY index.js .
COPY package*.json .

# Install all required dependencies
RUN npm install --only=prod

# Install dockerize to wait the db service to be up and running
RUN apk update && apk add wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expose port 3000
EXPOSE 3000