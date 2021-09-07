// src/websocket.js

// the server host is determined based on the mode
// if the app is running in development mode (using npm start)
// then we set the host to "localhost:8080"
// if the app is in production mode (using npm run build)
// then the host is the current browser host
const host =
  process.env.NODE_ENV === "production"
    ? window.location.host
    : "localhost:8080";

//NOTE TO SELF (from comments)
//Binding callbacks inside the render function is a bad practice,
//it will create new functions on each render.
//The best place to do this is in the constructor.

// we create an exported variable `send` that we will assign
// later (just know that it is exported for now)
export let send;
// the onMessageCallback is also assigned later, as we will soon see
let onMessageCallback;
// This exported function is used to initialize the websocket connection
// to the server
export const startWebsocketConnection = () => {
  // a new Websocket connection is initialized with the server
  const ws = new window.WebSocket("ws://" + host + "/chat") || {};

  // if connection is opened, we log to the console
  ws.onopen = () => {
    console.log("opened ws connection");
  };

  // if connection closed, we log that as well + error code
  ws.onclose = (e) => {
    console.log("close ws connection: ", e.code, e.reason);
  };

  // this callback is called every time a message is received.
  ws.onmessage = (e) => {
    // the onmessageCallback function is called with the message
    // data as the argument
    onMessageCallback && onMessageCallback(e.data);
  };

  // we assign the send method of the connection to the exported
  // send variable that we defined earlier
  send = ws.send.bind(ws);

  console.log("send: ", send);
};

// This function is called by our React application to register a callback
// that needs to be called everytime a new message is received
export const registerOnMessageCallback = (fn) => {
  // The callback function is supplied as an argument and assigned to the
  // `onMessageCallback` variable we declared earlier
  onMessageCallback = fn;
};
