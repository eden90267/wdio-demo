FROM node:8
COPY ./ /wdio-demo
WORKDIR /wdio-demo

RUN npm install