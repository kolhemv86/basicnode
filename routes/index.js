const items = require('./item');
const users = require('./userroute');

module.exports = (router) => {

    items(router);
    users(router);
    return router;
}