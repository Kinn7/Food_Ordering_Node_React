const express = require('express')
const cors = require('cors')
const {
    json
} = require('body-parser');
const fs = require('fs');
const send = require('send');
 

require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(cors())
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }
  app.get('/products/:id', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for only example.com.'})
  })
  


//menuitem
const menuRouter=require('./Routes/menuitemRouter')
app.use('/api/menuitem',cors(corsOptions),menuRouter);



//table



const TableRouter=require('./Routes/TableRouter')
app.use('/api/table',cors(corsOptions),TableRouter)





//ingredient



const ingredientRouter=require('./Routes/ingredientRouter')
app.use('/api/ingredient',cors(corsOptions),ingredientRouter)





//Extra

const extraRouter=require('./Routes/extraRouter')
app.use('/api/extra',cors(corsOptions),extraRouter)

//Categories

const CategoryRouter=require('./Routes/CategoryRouter')
app.use('/api/Category',cors(corsOptions),CategoryRouter)
 


 

//Menu_ingredient

const  MenuIngredientRouter=require('./Routes/menuIngredientRouter')
app.use('/api/MenuIngredient',cors(corsOptions),MenuIngredientRouter)


 



app.listen(port, () => {
    console.log('app is running ...')
})