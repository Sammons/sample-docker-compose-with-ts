FROM node:10-alpine

WORKDIR /app/

COPY ./package.json ./package-lock.json /app/

RUN npm i

COPY ./tsconfig.json /app/
COPY ./src /app/src/
COPY ./test /app/test/

RUN npm run build

CMD node /app/built/src/index