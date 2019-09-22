const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request')
const PORT = 8080;

let apiCall = require('./api.js')
// SDK example
let key = "5c9676a9f448181b63448971"
let word = "hello"
let url = 'http://localhost:4000/engvies/'
//apiCall.callApi(url,key,word)

// apiCall.callApi("1",key,word)

app.get('/', (req,res)=>{
    res.send(apiCall.callApi(url,key,word)+ "hello")
})

app.use(bodyParser.json());
app.listen(PORT,()=> console.log('Listening on PORT '+ PORT));
