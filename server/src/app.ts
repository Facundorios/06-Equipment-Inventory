import { HOST } from "./configuration/env/enviroments";
import { Server } from "./Server";

const server = new Server();
console.log(HOST);

server.initializationServer();
