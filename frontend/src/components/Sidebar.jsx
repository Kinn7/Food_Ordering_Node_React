import React , { useEffect , useState } from "react";
import Category from "./Category"

const Sidebar = () => {

  const [category , setCategory] = useState([{

  }])

  useEffect(() => {
    console.log("use effect run")
      fetch("http://localhost:3000/api/category")
      .then(res => res.json())
      .then(data => setCategory(data.category))
  },[])

  const categories = category.map((c,i) => (
    <Category key={i} categoryName={c.categoryName} />

  ))
    return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
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


    <div className="col py-3">Content area...</div>
    
    {/* <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0   bg-warning bg-gradient" style={{ backgroundColor : 'rgb(66,33,11)' }}>
                <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
                       
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                        <span className=" d-none d-sm-inline text-dark ps-3  " style={{ fontSize : 37      }}>ABC  Restaurant</span>
          <li className="nav-item pt-5 " >
              <span className="ms-1 d-none d-sm-inline   text-dark " style={{ fontStyle : "italic", fontWeight : "bold", fontSize : 32, fontFamily : 'pristina'  }}>Foods</span>
          </li>
          <li>
            
            <ul style={{ backgroundColor : 'grey'  }}
              className="collapse show nav flex-column ms-1"
              id="submenu1"
              data-bs-parent="#menu"
            >
              <li className="w-100 ">
                <a href="#" className="nav-link px-0 text-dark">
                  {" "}
                  <span className="d-none d-sm-inline">Pasta Corner</span> 
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 text-dark">
                  {" "}
                  <span className="d-none d-sm-inline">Traditional</span> 
                </a>
              </li>
            </ul>
          </li>

          <li>

            <ul
              className="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <hr />

      </div>
    </div> */}

  </div>
</div>

    )
}

export default Sidebar