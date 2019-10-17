const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan =  require('morgan');
const request = require('request')

const PORT = 8000;

app.get('/',(req,res)=> {
    var welcome = {
        msg: 'welcome to localhost:'+PORT
    };
    res.json(welcome);
});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get("/engvies/:eng", (req,res)=>{
    let word = req.params.eng;
    request({
        url: 'http://localhost:3001/engvie/' + word,
        method: 'GET',
        dataType: "json",
        timeout: 10000,
    },function(err,data,body) {
        let obj = JSON.parse(body);
        console.log(obj.vie)
        res.send(obj.vie)
    })
})
app.listen(PORT,()=> console.log('Listening on PORT '+ PORT));