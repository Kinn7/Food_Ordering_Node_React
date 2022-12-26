const express = require('express');
const fs=require('fs')
const send = require('send');
//const category = JSON.parse(fs.readFileSync())
const category =  [ 
    {
        "id": 0,
        "categoryName": "category 0"
    },
    {
        "id": 1,
        "categoryName": "category 1"
    },
    {
        "id": 2,
        "categoryName": "category 2"
    },
    {
        "id": 3,
        "categoryName": "category 3"
    },
    {
        "id": 4,
        "categoryName": "category 4"
    },
    {
        "id": 5,
        "categoryName": "category 5"
    }
];
 

const app = express();

app.use(express.json());

const route = express.Router();


exports.createCategory=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            category: "Categories created",
            body: req.body

        }
    })
}

exports.getCategory=(req, res) => {
    res.status(200).json({
        status: 'success',
        category: category
         
    })
}

exports.getCategoryById=(req, res) => {
    const id = req.params.id *1;
    if(id < category.length){
        res.status(200).json({
            status: 'success',
            category: category[id]
        })
    }else{
        res.status(404).send('s')
    }
   
    
}
exports.deleteCategory=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            category: "Deleted",
            body: req.body
        }

    })
}