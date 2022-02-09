const http = require('http');
const dotenv = require("dotenv").config();
const app = require('./app');


const port = process.env.PORT;
// const mongoPath= process.env.MONGO_PATH;
// console.log("MongoPath", mongoPath)

const server = http.createServer(app);

server.listen(port);