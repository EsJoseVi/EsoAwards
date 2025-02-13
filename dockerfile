FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g serve

COPY . .

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]