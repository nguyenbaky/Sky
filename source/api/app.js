const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan =  require('morgan');
const EngVieApi = require('./EngVieApiControler');
const FranVieApi = require('./FranVieApiControler');
const PORT = 3001;

app.get('/',(req,res)=> {
    var welcome = {
        msg: 'welcome to localhost:'+PORT
    };
    res.json(welcome);
});

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/engvie',EngVieApi);
app.use('/franvie',FranVieApi);

app.listen(PORT,()=> console.log('Listening on PORT '+ PORT));