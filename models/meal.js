const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    label: { type: String },
    image: { type: String },
    url: { type: String },
    uri: { type: String },
    totalCalories: { type: String },
    perServingCalories: { type: String },
    ingredientLines: [{
        type: String
    }],
    category: { type: String },
    type: { type: String }
});

const Meal = mongoose.model('Meal', MealSchema);
module.exports = Meal;