var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('main');
});

app.use(express.static('public'));

app.listen(1234, function(){
    console.log("Success.");
})