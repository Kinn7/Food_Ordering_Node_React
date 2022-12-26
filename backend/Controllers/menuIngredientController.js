const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();


exports.getMenuIngredient=(req,res)=>{
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: "All Menu_ingredient"
        }
    })
}