const express = require('express');
const router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const request = require('request')
const adapter = new FileSync("db.json")
const db = low(adapter)
router.get('/',(req,res)=>{
    var mes = {
        msg: "welcome to Api Eng-Vie"
    }
    res.json(mes);
});


router.get('/:key/true/:eng',(req,res)=>{
            let key = req.params.key;
            let word = req.params.eng;

            const keyName = db.get('keygen')
            .find(findKey => findKey.key_name === req.params.key)
            .value()    

            if(keyName && (new Date(keyName.end_date) >= new Date())){
                console.log("find key")
                request({
                    url: 'http://localhost:3000/engvie/' + word,
                    method: 'GET',
                    dataType: "json",
                    timeout: 10000,
                },function(err,data,body) {
                    let obj = JSON.parse(body);
                    res.send(obj.vie)
                })
            }
            else if(keyName && (new Date(keyName.end_date) < new Date())){
                console.log("Sorry! The Key has expired!")
                res.send("Sorry! The Key has expired!")
            }
            else{
                console.log("Key incorrect! Check again")
                res.send("Key incorrect! Check again")
            }
});



module.exports = router;