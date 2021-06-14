FROM --platform=linux/amd64 node:14
 
WORKDIR /react-diep-docker
 
COPY ["package.json", "./"]
 
RUN npm install
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "start" ]