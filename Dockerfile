FROM node:8
COPY ./ /wdio-demo
WORKDIR /wdio-demo

CMD "npm install"