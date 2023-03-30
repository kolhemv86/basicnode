const controller = require('../contollers/usersController');
const auth = require('../utils/auth');


module.exports = (router) => {
    
  router.route('/users/register').post(controller.registerUser);
  
  router.route('/login').post(controller.login);
  router.route('/profile').post(auth.isAuthunticated,controller.Profile);

};