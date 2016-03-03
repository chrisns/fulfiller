FROM ubuntu:14.04

RUN apt-get install -y curl git

ENV NVM_VERSION v0.31.0
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 4.2.2
ENV NODE_ENV production

RUN curl https://raw.githubusercontent.com/creationix/nvm/${NVM_VERSION}/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION
#    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

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

