const express = require('express');
const router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter)

router.get('/',(req,res)=>{
    var mes = {
        msg: "welcome to Api Eng-Vie"
    }
    res.json(mes);
});
router.get('/:eng',(req,res)=>{
    const translate = db.get('vocab')
    .find(findWord => findWord.eng === req.params.eng)
    .value()
    if(!translate)
        res.send('Cannot find '+ req.params.eng );
    res.json(translate);
});

module.exports = router;