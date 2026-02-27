const express = require('express');
const path =  require('path');
const pug = require('pug');

var app = express();

app.set('views',path.join(__dirname,"views"));
app.set("view engine","pug");


app.get('/home',(req,res)=>{
    const subjects = ["DevOps","CC","DEVOPS LAB","SPM","Python","DBMS","Python Lab","CD","CC Lab","CNS lab","CNS"];
    res.render('sample.pug',{sub:subjects});
});
app.listen(4000,()=>{
    console.log("Server running");
});