const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();
 


const menuIngredientController = require('../Controllers/menuIngredientController')


route.route('/').get(menuIngredientController.getMenuIngredient)
module.exports=route;