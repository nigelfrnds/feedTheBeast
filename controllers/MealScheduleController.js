const moment = require('moment');
const MealSchedule = require('../models/mealSchedule');

module.exports.createSchedule = async(req, res) => {
    try {
        console.log('createSchedule: ', req.body);
        const { userId } = req.body; 
        let currentDate = moment().startOf('day');

        let mealSchedule = new MealSchedule({
            userId,
            date: currentDate
        });
        await mealSchedule.save();
        res.status(200).send({ mealSchedule });
    } catch (error) {
        console.log('createSchedule error: ', error);
        res.status(400).send({ message: error });
    }
};

module.exports.getSchedule = async (req, res) => {
    try {
        console.log('getSchedule: ', req.params);
        const { userId } = req.params;
        let mealSchedule = await MealSchedule.findOne({ userId });
        res.status(200).send({ userId, mealSchedule });
    } catch (error) {
        console.log('getSchedule error: ', error);
        res.status(400).send({ message: error });
    }
};