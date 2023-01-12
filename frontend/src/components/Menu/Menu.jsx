import React , { useState , useEffect} from "react";
import Categories from "./Categories";
import Cards from "./Cards";
import Cart from "./Cart";

const Menu = () => {
    //category state to set in the sidebar
    const [category , setCategory] = useState([{

    }])

    //menuItem state to set it in the middle of the page to get food lists i.e get's list of food from categoryId
    const [menuItem, setMenuItem] = useState([{
       
    }])

    //foodId state to change re render cards component when clicking on the different categories
    const [foodId, setFoodId] = useState(0)

    //food name to display on the cart
    const[foodName , setFoodName] = useState([])


    //this function accepts id of category from Categories component and passed it to setFoodId to set foodId state
    function getMenuItem(id){
        setFoodId(id) //setting foodId will trigger useEffect and re-render the component of Cards.jx to get the food items
    }   

    //remove food from cart
    function removeFood(food){
        const foods = foodName.filter(f => f!=food) //set foods where foodName is not the same as food recieved from the cart
        setFoodName(foods)
    }


 function getFood(id,menuItemName){

    let checkFoodExists = false
    foodName.map(food => {
        /*
        foodName length is greater than 0 and content of foodname is equal to menuItem 
        selected then set check to false to avoid adding same food item in the foodName state array
        */
        if(foodName.length > 0 && food == menuItemName){ 
            checkFoodExists = true
        }
    })

    if(!checkFoodExists){
        setFoodName(prevState =>{ 
            return [...prevState, menuItemName ]               
            })          
        
    }

}

   console.log(foodName)


    //this useEffect runs to get api of food items based on category id 
    useEffect(() => {
       console.log('use effect run')
        fetch(`http://localhost:3000/api/menuitem/Category/${foodId}`)
        .then(res => res.json())
        .then(data => setMenuItem(data.menuitem))
    },[foodId])
  
    //this useEffect runs to get the category from api and use it in the sidebar 
    useEffect(() => {
      fetch("http://localhost:3000/api/category")
        .then(res => res.json())
        .then(data => setCategory(data.category))
    },[])
//console.log(foodName)
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                {/* Categories  component passes two properties category to iterate the categories from api and handleClick to get id of the category from the Categories component*/}
                <Categories category = {category} handleClick={getMenuItem}/>
              
                {/* Cards component that passes property of menuItem to iterate the foodLists in the Cards component */}
                <Cards menuItem = {menuItem} handleClick={getFood}  />

                {/* Cart Component */}
                <Cart food = {foodName} handleClick={removeFood}/>
                
            </div>
        </div>
    )
}

export default Menu