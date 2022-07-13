const Item = require('../models/items');
const uploadfiledata = require('uploadfilemodule');

module.exports = {

    itemget: async (req,res) => {

        let results = {}
        console.log(req);

        const items = await Item.find({}).exec();
        await uploadfiledata.uploadfile(req.files.image_file,'public','image');

        results.status = 200;
        results.data = items;
        results.msg = 'Hello itemsget';
        res.send(results); 


    }


}