console.log("Servidor web 1.0");

const http = require('http');
const fs = require('fs');
const myserver = require('./lib/server.js');
//console.log(process); // mainModule

//console.log(process.mainModule);

//console.log(process.cwd()); 




const publicDirectory = process.cwd()+"/public"; // Current working directory

const server = http.createServer((req, res) => {
	console.log(req.headers);

	let file = (req.url == '/')
				? 'index.html'
				: '';

	try 
	{
		content = fs.readFileSync(publicDirectory + '/' + file);
	} catch (e) 
	{
		content = fs.readFileSync(publicDirectory + '/404.html');
	}


	res.end(content);
});

server.on('clientError', (err, socket) => {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000);


console.log(myserver);