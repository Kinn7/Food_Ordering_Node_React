import React from "react";


const Category = (props) => {
    

{/* <ul  
        className="collapse show nav flex-column  ps-4 "
        id="submenu1"
        data-bs-parent="#menu"
        
      > 
         </ul>
   
    */}

    return (
      <li className="w-100 ps-5 " >
       <a href="#" className="nav-link px-0 text-dark" >
         <span className="d-none d-sm-inline text-white" >{props.categoryName}</span> 
       </a>
     </li>
 
    )
}

export default Category