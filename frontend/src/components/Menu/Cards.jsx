import React from "react";

const Cards = (props) => {

    //variable that holds menuItem(food lists from api) that iterates through the http://localhost:3000/api/menuitem/Category/${foodId} list api gotten from Menu Component passed through props
    const menuItem = props.menuItem.map((c,i) => (
        <div className="card bg-light mb-3" style={{maxWidth : "18rem"}} key={i}>
            <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title" >{c.menuItemName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        </div>
        
          ))
          
    return(
        <div className="col py-3">Content area...

        {menuItem}

        </div>
    )
}

export default Cards