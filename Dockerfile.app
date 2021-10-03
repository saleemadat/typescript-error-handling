FROM node:12-alpine3.12

WORKDIR /user/src/app

# Packages

RUN apk update \
  \
  # PM2
  \
  && npm install pm2 -g


COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "run", "start"]
