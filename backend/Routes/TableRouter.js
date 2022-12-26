const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();
const tableController = require('../Controllers/TableController')

route.route('/').post(tableController.createTable).get(tableController.getTable);
route.route('/:id').get(tableController.getTableById).delete(tableController.deleteTable)
module.exports=route;