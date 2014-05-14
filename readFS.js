var fs = require('fs');
var http = require('http');
var util = require('util');

http.createServer( function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readdir(".", function(err,name){
		if(err){
			console.error(err);
		} else {
			res.write("<div>");
			for(i=0;i<name.length;i++)
				res.write(util.format("<br>%s",name[i.toString()].toString()));
				res.end("</div>");
		}
	});
}
).listen(3000);

console.log('server start');