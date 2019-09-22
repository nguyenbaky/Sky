const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request')


// SDK example
 let key = "5c9676a9f448181b63448971"
 let word = "hello"
 let url = "http://localhost:4000/engvies/";
 var result = ""


console.log(request.get(url + key +"/true/" + word,function(err,body){
    if(err){
        console.log(err + "err")
    }
    else{
    return body.body
    }
})  
)
 
 async function callApi(url,key,word) {
    try {
      const user = await  request.get(url + key +"/true/" + word,function(err,body){
        if(err){
            console.log(err + "err")
        }
        else{
        console.log(body.body + "body")
        }
    })  
    } catch (err) {
      console.log(err)
    }
  }
 
console.log(callApi("http://localhost:4000/engvies/","5c9676a9f448181b63448971","hello"))

// callApi("http://localhost:4000/engvies/",key,word)



app.use(bodyParser.json());


module.exports = {
    callApi : callApi
}