FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps --registry=https://registry.npmjs.org/

COPY . .

EXPOSE 3000

CMD ["npm", "start"]