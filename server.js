const http = require('http');
const hostname = '127.0.0.1';

'use strict';

const express = require('express');
const app = express();


// Configure app
app.set('views', __dirname + 'views');
// Serve static files in public
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile( __dirname + '/views/index.html');
});

let port = process.env.PORT;
if( port == null || port == "") {
  port = 5000;
}
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
