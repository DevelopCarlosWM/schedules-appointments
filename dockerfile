FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN mkdir -p database
RUN mkdir -p /database/config
RUN mkdir -p /database/migrations
RUN mkdir -p /database/models
RUN mkdir -p /database/seeders
RUN mkdir -p /src
RUN npm install -g nodemon
COPY /package.json .
COPY /yarn.lock .
COPY /.sequelizerc .
COPY index.js .
COPY /.env .
ADD database/config ./database/config
ADD database/migrations ./database/migrations
ADD database/models ./database/models
ADD database/seeders ./database/seeders
ADD src ./src
RUN yarn install
EXPOSE 3000
RUN yarn migrate
CMD ["yarn", "dev"]
