require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const db = process.env.MONGO_LOCAL_CONN_URL

/*==== connect mongo db ===== */
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology:true } )
.then(() => console.log('Mongoose connected')).catch(err => console.log(err));


const routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.get('/test', async(req,res) => {
    let results = {};


    results.status = 200;
    results.data = [];
    results.msg = 'Hello test';
    res.send(results);

});


app.use('/api/v1', routes(router));

const port = 7500;

app.listen(port, () => {
    console.log('Greate you can serve on this port '+port);
})