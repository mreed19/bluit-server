var express = require('express');

var app = express();
app.set('port', 3030);

app.listen(app.get('port'), () => console.log(`Listening on ${app.get('port')}...`));
