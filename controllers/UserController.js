const jwt = require('jsonwebtoken');
const moment = require('moment');

const User = require('../models/user');
const MealSchedule = require('../models/mealSchedule');

module.exports.registerUser = async (req, res) => {
    try {
        console.log('registerUser: ', req.body);
        const { email, password, name, username } = req.body;
        let user = await User.createUser({ email, password, name, username });

        let currentDate = moment().startOf('day');
        let schedule = new MealSchedule({
            userId: user._id,
            date: currentDate
        });

        await schedule.save();
        let token = await jwt.sign({ user }, process.env.SECRET_KEY);
        res.status(200).send({ user, token });
    } catch (error) {
        console.log('registerUser error: ', error);
        res.status(400).send({ message: error });
    }
};

module.exports.loginUser = async (req, res) => {
    try {
        console.log('loginUser: ', req.body);
        const { email, password } = req.body;

        let existingUser = await User.findOne({ email });
        if(existingUser === null) {
            return res.status(400).send({ message: 'User does not exists' });
        }

        let isMatch =  await User.comparePassword(password, existingUser.password);
        
        if(isMatch) {
            let token = await jwt.sign({ user: existingUser }, process.env.SECRET_KEY);
            res.status(200).send({ user: existingUser, token });
        } else {
            res.status(400).send({ message: 'Incorrect email/password' });
        }
        
    } catch (error) {
        console.log('loginUser error: ', error);
        res.status(400).send({ message: error });
    }
};

module.exports.getUser = async (req, res) => {
    try {
        console.log('getUser: ', req.user);
        let { user } = req;

        let updatedUser = await User.findOne({ _id: user._id });

        let token = await jwt.sign({ user: updatedUser }, process.env.SECRET_KEY);
        
        res.status(200).send({ user: updatedUser, token });
    } catch (error) {
        console.log('getUser error: ', error);
        res.status(400).send({ message: error });
    }
};