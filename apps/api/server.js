import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import https from "https";
import http from "http";
import * as fs from "fs";
import { routes } from 'server-config';

// Get the route for this application.
const route = routes["api.continuum-ai.de"];

var privateKey = fs.readFileSync( '../../private/ssl-key.key' );
var certificate = fs.readFileSync( '../../private/ssl-key.cert' );

const app = express();
app.use(express.static('dist/client/'))
app.use(ssrHandler);

// Create a server for serving HTTPS content. (port 443)
https.createServer({
	key: privateKey,
	cert: certificate
}, app).listen(443);

// Create a server for HTTP content (port 80)
http.createServer(app).listen(route.port);

console.log("Successfully started server. Listening on port " + route.port)

