require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var postRoutes = require('./routes/post-routes');

var app = express();
app.set('port', (process.env.PORT || 3030));

app.use(bodyParser.json());

app.use('/api/v1/posts', postRoutes);

app.listen(app.get('port'), () => console.log(`Listening on ${app.get('port')}...`));
