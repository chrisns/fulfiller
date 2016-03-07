FROM node:4.2.6-slim
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR / home/app

ADD package.json typings.json ./

RUN mkdir -p /home/app/shippable/codecoverage && mkdir -p /home/app/shippable/testresults

RUN npm --production=false --unsafe-perm=true install --no-optional

COPY . .

VOLUME /home/app/shippable
CMD ["npm", "start"]

