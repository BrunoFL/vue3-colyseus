import express from "express";

import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from "http";
import http from "http";
import { Server } from "colyseus";
import { MyRoom } from "./server/rooms/MyRoom.mjs";

const port = process.env.PORT || 3001;
const app = express();
const httpServer = createServer(app);


/*
 *  Serve /dist/ folder
 */
const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/dist'));
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

// create your game server
const gameServer = new Server({
    server: http.createServer()
});

// register your room handlers
gameServer.define('my_room', MyRoom);

// make it available to receive connections
gameServer.listen(port);

console.log(`Listening on ws://localhost:${port}`);
