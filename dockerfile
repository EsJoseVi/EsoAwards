FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g serve

RUN npm run build

COPY . .

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]