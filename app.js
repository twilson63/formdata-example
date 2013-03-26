var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/uploads'}));
  app.use(express.static(__dirname + '/public'));
});

app.post('/uploads', function(req, res) {
  console.log(req.files.uploadFile);
  res.send(200);
});

app.listen(3000);