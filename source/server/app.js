const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan =  require('morgan');
const result = require('./eng-vie');

const PORT = 4000;

app.get('/',(req,res)=> {
    var welcome = {
        msg: 'welcome to localhost:'+PORT
    };
    res.json(welcome);
});

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/engvies',result);
app.listen(PORT,()=> console.log('Listening on PORT '+ PORT));