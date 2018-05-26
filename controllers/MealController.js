const axios = require('axios');

const Meal = require('../models/meal');

const ROOT_URL = `https://api.edamam.com/search?`;
const API_KEYS =  `app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

module.exports.getMeal = async (req, res) => {
    try {
        console.log('getMeal: ', req.params);
        const { calories } = req.params;

        let meals = await Meal.find({ perServingCalories: { $lte: calories } }).limit(3);
        res.status(200).send({ meals });
    } catch (error) {
        console.log('getMeal error: ', error);
        res.status(400).send({ message: error });
    }
};

const fetchMealFromAPI = async (calories) => {
    const query = `${ROOT_URL}&q=vegan&${API_KEYS}&calories=${calories-100}-${calories}`;
    let { data: { hits } } = await axios.get(query);

    for(let meal of hits) {
        const { label, image, url, uri, calories, ingredientLines } = meal.recipe;
        let newMeal = new Meal({
            label,
            image,
            url,
            uri,
            totalCalories: calories,
            perServingCalories: req.params.calories,
            ingredientLines,
            category: "vegan",
            type: "lunch"
        });
        await newMeal.save();
    }
};