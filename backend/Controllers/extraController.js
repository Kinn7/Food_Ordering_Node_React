const express = require('express');

const app = express();

app.use(express.json());

const route = express.Router();

exports.createExtra=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: "Extra created",
            body: req.body

        }
    })
}
exports.getExtra=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: "All Extra"
        }
    })
}
exports.getExtraById=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredient: "Extra",
            id: req.params.id
        }
    })

}
exports.deleteExtra= (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "Deleted",
            body: req.body
        }

    })
}