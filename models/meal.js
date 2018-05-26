const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    label: { type: String },
    image: { type: String },
    url: { type: String },
    uri: { type: String },
    calories: { type: String },
    ingredientLines: [{
        type: String
    }],
    type: { type: String }
});

const Meal = mongoose.model('Meal', MealSchema);