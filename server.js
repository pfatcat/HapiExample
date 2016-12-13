"use strict";

const Hapi = require("hapi");

//get the routes for the server
const routes = require("./routes.js");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: "0.0.0.0", 
    port: 8000, 
	routes: {cors: true}
});

//add routes to server
server.route(routes);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log("Server running at:", server.info.uri);
});