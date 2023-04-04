import express from 'express';
import { handler as ssrHandler } from '../dist/apps/main/dist/server/entry.mjs';
import https from "https";
import http from "http";
import * as fs from "fs";

var privateKey = fs.readFileSync( '../private/ssl-key.key' );
var certificate = fs.readFileSync( '../private/ssl-key.cert' );

const app = express();
app.use(express.static('./dist/apps/main/dist/client'))
app.use(ssrHandler);

// Create a server for serving HTTPS content. (port 443)
https.createServer({
	key: privateKey,
	cert: certificate
}, app).listen(4000);

// Create an HTTP server
http.createServer(app).listen(3000);

console.log("Successfully started server 'main'. Listening on port 3000")

