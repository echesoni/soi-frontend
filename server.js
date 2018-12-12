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

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(process.env.PORT || 5000);
