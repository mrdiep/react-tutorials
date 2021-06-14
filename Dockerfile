FROM node:14.15.0-alpine
 
WORKDIR /react-diep-docker2
 
COPY . .

RUN npm install
 
EXPOSE 3000
 
CMD [ "npm", "start" ]

