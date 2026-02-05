const http = require('node:http');  
const { text } = require('node:stream/consumers');

http.createServer(function (request, response) {
  response.writeHead(200,
    {'content-type':'text/http;charset=utf-8'}); 
  response.end('Olá, Cliente!');
}).listen(3000); 