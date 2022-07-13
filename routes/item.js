const controller = require('../contollers/itemController');
module.exports = (router) => {

    router.get('/item', async(req,res) => {

        let results = {}
        results.status = 200;
        results.data = [];
        results.msg = 'Hello items';
        res.send(results);

    });

    router.route('/itemget').post(controller.itemget)

}