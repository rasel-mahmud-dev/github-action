FROM node:22-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --production

COPY . .

CMD ["node", "index.js"]
