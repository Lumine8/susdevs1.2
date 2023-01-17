import { Link } from "react-router-dom";
import React from "react";
import './css/main-styling.css'

const Navbar =()=>{
    function closeBtn(){
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
      }
    
      function menuBtnChange() {
       if(sidebar.classList.contains("open")){
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
       }else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
       }
    }
    return(
    <>
    <div className="sidebar">
    <div className="logo-details">
    <Link to="/" className="icon-a" style={{textDecoration:'none'}}>
        <div className="logo_name">SusDevs</div>
        </Link>
        <i onClick={closeBtn} className='bx bx-menu' id="btn" ></i>
    </div>

    <ul className="nav-list">
      <li>
      <Link className="a" to="/">
          <i className='bx bx-home-alt'></i>
          <span className="links_name">Home</span>
        </Link>
         <span className="tooltip">Home</span>
      </li>
      <li>
      <Link className="a" to="/Blogs">
        <i className='bx bx-grid-alt'></i>
         <span className="links_name">Blogs</span>
         </Link>
       <span className="tooltip">Blogs</span>
     </li>

     <li>
     <Link className="a" to="/Projects">
        <i className='bx bx-laptop'></i>
         <span className="links_name">Projects</span>
         </Link>
       <span className="tooltip">Projects</span>
     </li>

     <li>
     <Link className="a" to="/Contact-us">
         <i className='bx bx-heart' ></i>
         <span className="links_name">Contact us</span>
         </Link>
       <span className="tooltip">Contact us</span>
     </li>
    </ul>
  </div>
    
    </>
    )
    
    
    
}

export default Navbar