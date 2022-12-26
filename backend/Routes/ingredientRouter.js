const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();

const ingredientController = require('../Controllers/ingredientController')

route.route('/').post(ingredientController.createIngredient).get(ingredientController.getIngredient)
route.route('/:id').get(ingredientController.getIngredientById).delete(ingredientController.deleteIngredient)
module.exports = route;