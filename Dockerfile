FROM node:4.2.6-slim
ENV NPM_CONFIG_LOGLEVEL warn

RUN useradd -m --system app

USER app
WORKDIR /home/app

ADD package.json typings.json ./

RUN mkdir -p /home/app/shippable/codecoverage && mkdir -p /home/app/shippable/testresults

RUN npm --production=false install --no-optional

COPY . .
USER root
RUN bash -O extglob -c 'chown app:app !(node_modules)'

VOLUME /home/app/shippable
CMD ["npm", "start"]

