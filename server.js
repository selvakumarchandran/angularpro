const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*',function (req,res) {
  res.sendfile(path.join(__dirname,'dist/index.html'));
});

/*app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist/index.html'));
 });*/

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/* Listen on provided port, on all network interfaces.*/
app.listen(port);
