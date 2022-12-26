const express = require('express');
const app = express();
app.use(express.json());

exports.createTable=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "table created",
            body: req.body

        }
    })
}
exports.deleteTable=(req,res)=>{
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "Deleted",
            body: req.body
        }

    })
}
exports.getTable=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "All tables"
        }
    })
}
exports.getTableById=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "table",
            id: req.params.id
        }
    })
}