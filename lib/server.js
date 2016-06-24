

module.exports = server;

var server = function (req, res) {
	this.req = req;
	this.res = res;

	//console.log(req.headers);

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
}