// server/index.js

//NOTE TO SELF (from comments)
//Binding callbacks inside the render function is a bad practice,
//it will create new functions on each render.
//The best place to do this is in the constructor.

// import express & express-ws libraries
// *express.js is a Node.js web application server framework
const express = require("express");
const expressWs = require("express-ws");

// create new express application
// decorate app instance w/ express-ws
// implement websockets 
const app = express();
expressWs(app)

// create new set to hold each client's socket connection
 connections = new Set()

 // define a handler that will be called for every new ws connection
 //add connection to set
 const wsHandler = (ws) => {
     connections.add(ws)

    // define handler for every new message received from client.
    // on receival of message, broadcast to all clients in connection set
    ws.on('message', (message) => {
        connections.forEach((conn) => conn.send(message))
    })

    // once the client disconnects, the `close` handler is called
    // delete dis guy from set
    ws.on('close', () => 
        connections.delete(ws)
    )

    // add our websocket handler to the '/chat' route
    app.ws('/chat',wsHandler)

    // host the static files in the build directory
    // (we will be using this later)
    app.use(express.static('build'))

    //start server, listening on port 8080
    app.listen(8080)