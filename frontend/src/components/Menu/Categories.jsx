import React  from "react";


const Categories = (props) => {


  
    const categories = props.category.map((c,i) => (
  //    <Category key={i} categoryName={c.categoryName} />
      <li className="w-100 ps-5 " key={i}>
      <a href="#" className="nav-link px-0 text-dark" >
        <span className="d-none d-sm-inline text-white" >{c.categoryName}</span> 
      </a>
    </li>
  
    ))
    
    return (
     //   <div className="container-fluid">
       // <div className="row flex-nowrap">
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


    
 // </div>
//</div>
    )
}

export default Categories