// import express from "express";
let express = require('express')
// import * as http from 'http';
let http1 = require('http')
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express()
const server = createServer(app);
const io = new Server(server)
const http = http.Server(app)
const port = process.env.PORT|| 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
});

http.RequestListener(port, function(){
    console.log("Listening on (: " + port )
});
