import React , { useState , useEffect} from "react";
import Categories from "./Categories";
import Cards from "./Cards";
import Cart from "./Cart";


const Menu = () => {
    const [category , setCategory] = useState([{

    }])
  
    useEffect(() => {
      console.log("use effect run")
        fetch("http://localhost:3000/api/category")
        .then(res => res.json())
        .then(data => setCategory(data.category))
    },[])
  

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                <Categories category = {category}/>
                <Cards />
                <Cart />
                
            </div>
        </div>
    )
}

export default Menu