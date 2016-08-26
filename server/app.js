require('dotenv').config()
var express = require('express');
var https = require('https');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;
var rootDirectory = path.join(__dirname, '../')
var ticketBasePath = '/rest/api/latest/search?jql=filter='
var ticketFields = 'customfield_10002,issuetype,key,summary'

app.use('/client', express.static(rootDirectory + '/client'));
app.use('/dist', express.static(rootDirectory + '/dist'));
app.use('/node_modules', express.static(rootDirectory + '/node_modules'));

var loadJiraTickets = function(req, res) {
  var authHeader =
    new Buffer(process.env.JIRA_USERNAME + ':' + process.env.JIRA_PASSWORD).toString('base64')
  var filterId = '13934'

  var options = {
    headers: { 'Authorization': 'Basic ' + authHeader },
    hostname: 'jira.arcadiasolutions.com',
    path: ticketBasePath + filterId + '&fields=' + ticketFields + '&maxResults=1000'
  }

  https.get(options, function(response) {
    var body = '';

    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function(data) {
      res.send(JSON.parse(body).issues);
    });

    response.on('error', function(error) {
      console.log('Error: ' + error.message);
    });
  });
};

var renderIndex = function(req, res) { res.sendFile(rootDirectory + 'client/index.html'); };

app.get('/', renderIndex);
app.get('/api/tickets', loadJiraTickets);

var server = app.listen(port, function() {
  console.log('Express app is listening on port:' + port);
});
