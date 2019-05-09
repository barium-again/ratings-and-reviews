FROM node:10
WORKDIR user/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start-redis"]