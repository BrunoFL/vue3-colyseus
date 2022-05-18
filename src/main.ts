import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
console.log(import.meta.env);
const host = import.meta.env.DEV ? "ws://localhost:3001" : "ws://localhost:3000";
console.log(host);
const client = new Colyseus.Client(host);

client
    .joinOrCreate("my_room")
    .then(room => {
        console.log(room.sessionId, "joined", room.name);
    })
    .catch(e => {
        console.log("JOIN ERROR", e);
    });

