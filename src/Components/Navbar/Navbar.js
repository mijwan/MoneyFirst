import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import Table from "../Table/Table"


const Navbar = () => {
  let [navClass, setnavClass] = useState('');
  window.onscroll = v => {
    if(document.documentElement.scrollTop > 50){
      setnavClass('onScrollDown')
    } else {
      setnavClass('')
    }
  };

  
  return (
    <>
     <div className={navClass + " customNav"}>
      <nav className='navbar navbar-expand-lg navbar-dark container'>
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Link to="/"><img src="Images/logo1.png" alt="" className="logoImage" /><br/>
            <p>MoneyFirst</p></Link>
            {/* <h1>MoneyFirst</h1> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex align-items-center justify-content-end  w-100">
              <ul className="navbar-nav ">
                {/* <li className="nav-item">
                  <a className="nav-link" href="#aboutus">
                    About Us
                  </a>
                </li> */}

                <li className="nav-item" id='navDemo'>
                  <a className="nav-link" href="#table-data" >
                  RATES & FEES
                  </a>
                </li>
                 
                <li className="nav-item">
                <div className="container mt-3">  
                  <a className="nav-link" href="" data-bs-toggle="modal" data-bs-target="#myModal">
                    Login
                  </a>
                  </div>
                <div className="modal" id="myModal">
                     <div className="modal-dialog">
                        <div className="modal-content">    
                           <div className="modal-header">
                                <h4 className="modal-title">HELLO,USER</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>      
                       <div className="modal-body">
                       We are working on new features in website. For now,please use the Moneyfirst mobile app.Thank You!
                       </div>      
                   <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                       </div>
                     </div>
                   </div>
                </div>
              </li>

                <li className="nav-item">
                <div className="container mt-3">  
                  <a className="nav-link" href="" data-bs-toggle="modal" data-bs-target="#myModal">
                    Sign Up
                  </a>
                  </div>
                  <div className="modal" id="myModal">
                     <div className="modal-dialog">
                        <div className="modal-content">    
                           <div className="modal-header">
                                <h4 className="modal-title">HELLO,USER</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                              </div>      
                       <div className="modal-body">
                       We are working on new features in website. For now,please use the Moneyfirst mobile app.Thank You!
                       </div>      
                   <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                       </div>
                     </div>
                   </div>
                </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}


export default Navbar;