const express = require('express');
const router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)

router.get('/',(req,res)=>{
    var mes = {
        msg: "welcome to Api Fran-Vie"
    }
    res.json(mes);
});
router.get('/:fran',(req,res)=>{
    const translate = db.get('vocab')
    .find(findWord => findWord.fran === req.params.fran)
    .value()
    if(!translate)
        res.send('Cannot find '+ req.params.fran );
    res.json(translate);
});

module.exports = router;