const express = require('express')
const {
    json
} = require('body-parser');
const fs = require('fs');
const send = require('send');
 

require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())

//menuitem
const menuRouter=require('./Routes/menuitemRouter')
app.use('/api/menuitem',menuRouter);



//table



const TableRouter=require('./Routes/TableRouter')
app.use('/api/table',TableRouter)





//ingredient



const ingredientRouter=require('./Routes/ingredientRouter')
app.use('/api/ingredient',ingredientRouter)





//Extra

const extraRouter=require('./Routes/extraRouter')
app.use('/api/extra',extraRouter)

//Categories

const CategoryRouter=require('./Routes/CategoryRouter')
app.use('/api/Category',CategoryRouter)
 


 

//Menu_ingredient

const  MenuIngredientRouter=require('./Routes/menuIngredientRouter')
app.use('/api/MenuIngredient',MenuIngredientRouter)


 



app.listen(port, () => {
    console.log('app is running ...')
})