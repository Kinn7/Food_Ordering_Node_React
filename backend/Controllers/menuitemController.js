const express = require('express');
const app = express();
app.use(express.json());

const menuitem =  [ 
    {
        "id": 0,
        "menuItemName": "Food 0",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID": 0
    },
    {
        "id": 1 ,
        "menuItemName": "Food 1",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID": 0
    },
    {
        "id": 2,
        "menuItemName": "Food 2",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":1
    },
    {
        "id": 3,
        "menuItemName": "Food 3",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":5
    },
    {
        "id": 4,
        "menuItemName": "Food 4",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":0
    },
    {
        "id":5 ,
        "menuItemName": "Food 5",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":2
    },
    {
        "id":6 ,
        "menuItemName": "Food 6",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":3
    },
    {
        "id": 7,
        "menuItemName": "Food 7",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":4
    },
    {
        "id": 8,
        "menuItemName": "Food 8",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":3
    },
    {
        "id": 9,
        "menuItemName": "Food 9",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":5
    },
    {
        "id": 10,
        "menuItemName": "Food 10",
        "price":150,
        "pic":'https://picsum.photos/200/300',
        "categoryID":1
    },
   
];

exports.createMenuItem=(req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "menu item created",
            body: req.body
        }
    })
}
exports.getAllMenuItems=(req, res) => {
    res.status(200).json({
        status: 'success',
        menuitem: menuitem


    })
}
exports.getMenuItemById=(req, res) => {
    res.status(200).json({
        status: 'success',
        menuitem: menuitem[req.params.id*1]
        
    })
}
exports.updateMenuItem=(req, res) => {
    res.status(200).json({
        status: 'success',
        data: {

            menuitem: "Updated",
            body: req.body
        }

    })
}
exports.deleteMenuItem= (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            menuitem: "Deleted",
            body: req.body
        }

    })
}

exports.getMenuItemByCategoryId= (req, res) => {
    const cid = req.params.id *1;
    const sameMenuItem=menuitem.filter((e)=>{
        return e.categoryID ===cid;
    })
    res.status(200).json({
        status: 'success',
        menuitem: sameMenuItem
        

    })
}
