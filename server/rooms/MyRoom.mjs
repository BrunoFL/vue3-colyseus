import { Room } from "colyseus";

export class MyRoom extends Room {
    maxClients = 4;

    // room has been created: bring your own logic
    async onCreate(options) {
        console.log("on create", options)
    }

    // client joined: bring your own logic
    async onJoin(client, options) {
        console.log("on join", client, options)
    }

    // client left: bring your own logic
    async onLeave(client, consented) {
        console.log("on leave", client, consented)
    }

    // room has been disposed: bring your own logic
    async onDispose() {
        console.log('on dispose')
    }
}