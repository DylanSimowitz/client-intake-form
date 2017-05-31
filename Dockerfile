FROM node:alpine
WORKDIR /var/www/html/
COPY package.json yarn.lock ./
RUN npm install
COPY ./ ./
