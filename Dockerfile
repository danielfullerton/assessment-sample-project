FROM node:15-alpine
WORKDIR /usr/app
COPY ./ ./

RUN ["npm", "install"]
RUN ["npm", "test"]

EXPOSE 8080

CMD ["npm", "start"]
