var http = require('http');
var myDate = require('./fmodule');
var url = require('url');
var fs = require('fs');
http
  .createServer(function (req, res) {
    // res.write(req.url); //{will give result /text on screen}
    // var q = url.parse(req.url, true).query;
    // var date = q.year + ' ' + q.month;
    // res.end(date);

    //read file
    fs.readFile('read.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.write(myDate.myDateTime());
      return res.end();
    });

    //open file with write permissions
    fs.open('mynewfile.txt', 'w', function (err, file) {
      if (err) throw err;
      console.log('Saved!');
    });

    //updation in file

    //create file
    fs.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Update!');
    });

    //replace file
    fs.writeFile('mynewfile2.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Replace!');
    });

    //delete file
    fs.unlink('mynewfile2.txt', function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });
    //rename file
    fs.rename('mynewfile.txt', 'file.txt', function (err) {
      if (err) throw err;
      console.log('Rename!');
    });
  })
  .listen(8000);
