const items = require('./item');

module.exports = (router) => {

    items(router);
    return router;
}