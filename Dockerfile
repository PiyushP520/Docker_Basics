FROM node:9-slim
WORKDIR /pp
COPY package.json /pp
RUN npm install 
COPY app.js /pp
CMD ['node','app.js']