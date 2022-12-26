import React , { useEffect } from "react";


const Category = () => {
    
const [category , setCategory] = React.useState()

useEffect(() => {
    fetch("http://localhost:3000/api/category")
    .then(res => res.json())
    .then(data => console.log(data))
},[])

// const cards = category.map((c) => {
//     <li className="w-100 ">
//     <a href="#" className="nav-link px-0 text-dark">
//       {" "}
//       <span className="d-none d-sm-inline">{c.categoryName}</span> 
//     </a>
//   </li>
// })


// function cards(){
//     <li className="w-100 ">
//     <a href="#" className="nav-link px-0 text-dark">
//       {" "}
//       <span className="d-none d-sm-inline">{category}</span> 
//     </a>
//   </li>
// }
    return (
    <ul  
        className="collapse show nav flex-column  ps-4 "
        id="submenu1"
        data-bs-parent="#menu"
      >
        
        <li className="w-100 ">
          <a href="#" className="nav-link px-0 text-dark">
            {" "}
            <span className="d-none d-sm-inline text-white">Pasta Corner</span> 
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-0 text-dark">
            {" "}
            <span className="d-none d-sm-inline text-white">Traditional</span> 
          </a>
        </li>
      </ul>
    )
}

export default Category