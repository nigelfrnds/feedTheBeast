const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealScheduleSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: { type: Date },
    sun: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    mon: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal',
    }],
    tue: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    wed: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    thu: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    fri: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }],
    sat: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }]
});

const MealSchedule = mongoose.model('MealSchedule', MealScheduleSchema);
module.exports = MealSchedule;