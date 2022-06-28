const Item = require('../models/items');

module.exports = {

    itemget: async (req,res) => {

        let results = {}

        const items = await Item.find({}).exec();

        results.status = 200;
        results.data = items;
        results.msg = 'Hello itemsget';
        res.send(results); 


    }


}