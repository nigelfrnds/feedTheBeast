const User = require('../models/user');

module.exports.registerUser = async (req, res) => {
    try {
        console.log('registerUser: ', req.body);
        // hash passwords
        // store to db
        // use jsonwebtoken to sign user
        // send signed user as response
        res.status(200).send({ message: 'registerUser' });
    } catch (error) {
        console.log('registerUser error: ', error);
        res.status(400).send({ message: error });
    }
};

module.exports.loginUser = async (req, res) => {
    try {
        console.log('loginUser: ', req.body);
        // similar to register
        res.status(200).send({ message: 'loginUser' });
    } catch (error) {
        console.log('loginUser error: ', error);
        res.status(400).send({ message: error });
    }
};