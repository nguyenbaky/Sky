const express = require('express');
const router = express.Router();

const request = require('request')
const url_axios = "http://localhost:14403/"

const axios = require('axios')


router.get('/',(req,res)=>{
    var mes = {
        msg: "welcome to Api Eng-Vie"
    }
    res.json(mes);
});

router.get('/:eng',(req,res) =>{
    
})


router.get('/:key/true/:eng',(req,res)=>{
            let key = req.params.key;
            let word = req.params.eng;

            axios.get(url_axios + 'users')
                .then(function (response) {
                  let result = response.data.filter(key =>{
                      return key.id === req.params.key
                  })
                  
                  if(Object.keys(result).length === 0){
                    console.log("Key incorrect! Check again")
                    res.send("Key incorrect! Check again")
                    }
                    else if(result && (new Date(result[0].date_end) >= new Date())){
                        console.log("finder")


                    //connect api 
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
                }
                else if(result && (new Date(result[0].date_end) < new Date())){
                    console.log("Sorry! The Key has expired!")
                    res.send("Sorry! The Key has expired!")
                }
      
                })
 
});



module.exports = router;