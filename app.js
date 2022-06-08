var app = require('./config/server')

app.get('/contato',function(req,res){
    res.render('site/contato');
});

app.get('/',function(req,res){
    res.render('site/home');
});


app.listen(8000,function(){
    console.log("localhost:8000");
});