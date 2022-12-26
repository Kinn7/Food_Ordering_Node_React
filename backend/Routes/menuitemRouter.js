
const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();

const menuitemController = require('../Controllers/menuitemController')

route
    .route('/')
        .get(menuitemController.getAllMenuItems)
        .post(menuitemController.createMenuItem);

route
    .route('/:id')
    .get(menuitemController.getMenuItemById)
    .patch(menuitemController.updateMenuItem)
    .delete(menuitemController.deleteMenuItem)
 
route.route('/Category/:id').get(menuitemController.getMenuItemByCategoryId)

module.exports = route;