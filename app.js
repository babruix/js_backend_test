var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();
app.use(cors());

var port = process.env.PORT || 3000;
var baseDir = process.env.PWD || './';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

directoryRouter = require('./Routes/directoryRoutes')(baseDir);
app.use('/api/listDirectory', directoryRouter);



app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;