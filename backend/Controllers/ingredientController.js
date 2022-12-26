const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();

exports.createIngredient= (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: " created",
            body: req.body

        }
    })

}
exports.getIngredient=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: "All ingredients"
        }
    })
}
 exports.getIngredientById=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: "ingredients",
            id: req.params.id
        }
    })
}
 exports.deleteIngredient=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "Deleted",
            body: req.body
        }

    })
}