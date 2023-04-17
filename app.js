var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin","*"); //bom para teste e tirar na versão final
    res.send("Olá");
});


app.listen(port, () => {
    console.log(`Servidor rodando com a porta ${port}`)
});