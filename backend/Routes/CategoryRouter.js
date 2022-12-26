const express = require('express');
const fs = require('fs')

const app = express();

app.use(express.json());

const route = express.Router();
 

const categoryController = require('../Controllers/CategoryController')


route.route('/').post(categoryController.createCategory).get(categoryController.getCategory)


route.route('/:id').get(categoryController.getCategoryById).delete(categoryController.deleteCategory)

 
module.exports=route;
