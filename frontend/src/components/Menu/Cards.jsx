import React from "react";

const Cards = (props) => {

    //variable that holds menuItem(food lists from api) that iterates through the http://localhost:3000/api/menuitem/Category/${foodId} list api gotten from Menu Component passed through props
    const menuItem = props.menuItem.map((c,i) => (
    <div className="card mx-5 p-0" key={i} style={{maxWidth : "18rem"}} onClick={() => props.handleClick(c.id,c.menuItemName) }>
            <img src={c.pic} className="img-fluid card-img-top img-thumbnail" style={{ height : "15rem"}}/>
        <div className="card-body">
            <h5 className="card-title" >{c.menuItemName}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#!" className="btn btn-primary">Button</a>
        </div>
    </div>

        
          ))
          return(
          <div className="col py-3">Content area...
            <div className="row">
                {menuItem}

            </div>
        </div>
    )
}

export default Cards