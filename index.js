require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');

const db = process.env.MONGO_LOCAL_CONN_URL
console.log(db);

mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology:true } )
.then(() => console.log('Mongoose connected')).catch(err => console.log(err));


const routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', async(req,res) => {
    let results = {}

    results.status = 200;
    results.data = [];
    results.msg = 'Hello test';
    res.send(results);

});


app.use('/api/v1', routes(router));

const port = 7500;

app.listen(port, () => {
    console.log('listen port '+port);
})