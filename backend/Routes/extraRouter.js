const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();
 

const extraController = require('../Controllers/extraController')




 

route.route('/').post(extraController.createExtra).get(extraController.getExtra)

route.route('/:id').get(extraController.getExtraById).delete(extraController.deleteExtra)

module.exports=route;