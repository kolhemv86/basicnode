const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../models/users');
const BaseController = require('../contollers/BaseController');
const RequestHandler = require('../utils/RequestHandler');
const TokenHandler = require('../utils/TokenHandler');

const requestHandler = new RequestHandler();
const tokenHandler = new TokenHandler();

class usersController extends BaseController {
   
    static async registerUser(req,res) {
        try{
            const { name, password, email } = req.body;
            const userobj = await super.store(req.body,User);
            return requestHandler.sendSuccess(res, 'User Data Extracted')( userobj );

        }catch(error)
        {
            console.log(error);
            return requestHandler.sendError(req, res, error);
        }
    }

    static async login(req,res) {

        let result = {};
        try{

            const { email, password } = req.body;
            const checkuser = await User.findOne({email}).exec();
    
            if(checkuser) {

              const matchif = await bcrypt.compare(req.body.password, checkuser.password); 
                if(matchif) {

                    const token = tokenHandler.GenerateToken(checkuser);
                    checkuser.usertoken = token;
                
                    result.name = checkuser.name;
                    result.email = checkuser.email;
                    result.Token = token;

                    return requestHandler.sendSuccess(res, 'success')( result );
                
                }else{

                    return requestHandler.sendSuccess(res, 'Credential does not match in our database','401')( );
                }

                
            }else{
                return requestHandler.sendSuccess(res, 'User not found')();
            }

        }catch(error)
        {
            return requestHandler.sendError(req,res,error);
        }
    }

    static async Profile(req,res) {

        return requestHandler.sendSuccess(res, '')(req.decoded);  
    }
}

module.exports = usersController;