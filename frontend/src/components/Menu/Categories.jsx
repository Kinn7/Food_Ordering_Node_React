import React  from "react";


const Categories = (props) => {
  
 //variable that holds categories(category lists from api) that iterates through the http://localhost:3000/api/category list api gotten from Menu Component passed through props 
    const categories = props.category.map((c,i) => (
     
      <li className="w-100 ps-5 " key={i} >
        <a href="#" className="nav-link px-0 text-dark" >
          <span className="d-none d-sm-inline text-white" onClick={() => props.handleClick(c.id)}>{c.categoryName}</span> 
        </a>
      </li>
  
    ))

    return (

            <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0   " style={{ backgroundColor : '#395144' }}>
                <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
                  <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                    <span className=" d-none d-sm-inline  ps-3  " style={{ fontSize : 35 , color : '#E5E5CB'}}>ABC  Restaurant</span>
                    <li className="nav-item pt-5 " >
                      <span className="ms-1 d-none d-sm-inline   " style={{ fontStyle : "italic", fontWeight : "bold", fontSize : 32, fontFamily : 'pristina'  }}>Foods & Drinks</span>
                    </li>
                    {categories}
                  </ul>
                  <hr />
                </div>
              </div>

    )
}

export default Categories