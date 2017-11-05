
var http=require("http");  // creating http server object 

http.createServer(function (request,response){  // creating   http server
  response.writeHead(200,{'Content-Type':'text/html'});
  response.write('Testing Dolphin AI         ');
  response.end('Hello Dolphin');
  console.log('\nHTTP server running\n');
}).listen(8081);  //server  listening at 8081
console.log('\nServer running at http://127.0.0.1:8081/\n');
