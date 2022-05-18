import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import http from "http";
import cors from "cors";
import { Server } from "colyseus";
import { MyRoom } from "./server/rooms/MyRoom.mjs";

const port = Number(process.env.PORT) || 3001;
const app = express();
const httpServer = createServer(app);
app.use(express.json());
app.use(cors());
/*
 *  Serve /dist/ folder
 */
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.use(express.static(__dirname + "/dist"));
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// create your game server
const gameServer = new Server({
  server: http.createServer(),
});
gameServer.attach({ server: httpServer });

// register your room handlers
gameServer.define("my_room", MyRoom);

// make it available to receive connections
gameServer.listen(port);

console.log(`Listening on ws://localhost:${port}`);
