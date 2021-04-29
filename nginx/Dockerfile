FROM nginx:1.15.0-alpine

# Install dockerize to wait the node service to be up and running
RUN apk update && apk add wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Remove default conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config to conf.d folder
COPY nginx.conf /etc/nginx/conf.d/