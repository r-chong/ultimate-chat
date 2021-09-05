const WebSocket = require("ws");

// starts server instance on http://localhost:8080
// fyi you can't use WebSockets over HTTPS
const wss = new WebSocket.Server({port: 8080});

//waits for connection to be established from client
// the callback argument ws is a unique for each client
wss.on('connection',(ws) => {

    // runs a callback on message event
    ws.on('message',(data) => {

        //sends the data to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data;)
            }
        });
    });
});