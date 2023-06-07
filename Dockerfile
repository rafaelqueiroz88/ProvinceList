FROM node:16.19.0-slim

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN mkdir /front-app
WORKDIR /front-app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY app-entrypoint.sh /usr/src/app/app-entrypoint.sh

RUN chmod +x /usr/src/app/app-entrypoint.sh
RUN yarn install

COPY . .

EXPOSE 8000

ENTRYPOINT ["/usr/src/app/app-entrypoint.sh"]
CMD ["yarn", "start"]
