
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  //res.writeHead(200, { 'content-type': 'text/csv' })
  fs.readFile(process.argv[2], function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/csv'});
    res.write(data);
    res.end();
  });
  //fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(8000)
//server.listen(Number(process.argv[2]))
