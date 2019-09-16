const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const request = require('request')

const PORT = 8080;

app.get('/',(req,res)=> {
    let key = "An1512277"
    let english = "hello"
    
    request.get('http://localhost:4000/engvies/' + key +"/true/" + english,function(err,result,body){
        if(err){
            console.log(err)
        }
        else
        res.send(body)
    })
   
});

app.use(bodyParser.json());
app.listen(PORT,()=> console.log('Listening on PORT '+ PORT));