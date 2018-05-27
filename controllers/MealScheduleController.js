const moment = require('moment');
const MealSchedule = require('../models/mealSchedule');
const Meal = require('../models/meal');

module.exports.createSchedule = async(req, res) => {
    try {
        console.log('createSchedule: ', req.body);
        const { userId } = req.body; 
        let currentDate = moment().startOf('day');

        let meals = await Meal.find({ category: 'chicken' });
        
        let mealSchedule = new MealSchedule({
            userId,
            date: currentDate,
            sun: meals,
            mon: meals,
            tue: meals,
            wed: meals,
            thu: meals,
            fri: meals,
            sat: meals
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
        let mealSchedule = await MealSchedule.findOne({ userId })
            .populate({ path: 'sun', options: { limit: 4 }})
            .populate({ path: 'mon', options: { limit: 4 }})
            .populate({ path: 'tue', options: { limit: 4 }})
            .populate({ path: 'wed', options: { limit: 4 }})
            .populate({ path: 'thu', options: { limit: 4 }})
            .populate({ path: 'fri', options: { limit: 4 }})
            .populate({ path: 'sat', options: { limit: 4 }});
            
            
        res.status(200).send({ mealSchedule });
    } catch (error) {
        console.log('getSchedule error: ', error);
        res.status(400).send({ message: error });
    }
};