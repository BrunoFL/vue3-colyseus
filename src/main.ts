import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

const host = process.env.VUE_APP_HOST || 'localhost';
const name = 'ws://' + host;
console.log(host);
const client = new Colyseus.Client(host);

client.joinOrCreate("my_room").then(room => {
    console.log(room.sessionId, "joined", room.name);
}).catch(e => {
    console.log("JOIN ERROR", e);
});