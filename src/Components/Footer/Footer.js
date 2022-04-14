import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom";



const Footer = () => {
  return (
    <>
    <section className="section-small footer footer-background">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 footer-menu">
             <h5>About</h5>
            <p>Feel free to contact us. A business has to be involving, it has to be fun, and it has to exercise your creative instincts. Start where you are. Use what you have. Do what you can.</p>
          </div>
          <div className="col-sm-2 col-sm-offset-1 footer-menu">
            <h5>Company</h5>
            <h6 className="no-pad"><a href="#about-page" className="page-scroll">About Us</a></h6>

            <Link to='/privacy'><h6 className="no-pad"><a href="privacypolicy.html" className="page-scroll">Privacy Policy</a></h6></Link>

            <Link to='/refund'> <h6 className="no-pad"><a href="refundpolicy.html" className="page-scroll">Refund Policy</a></h6></Link>
          </div>
          <div className="col-sm-2 footer-menu">
            <h5>&nbsp;</h5>
            <h6 className="no-pad"><a href="#table-data" className="page-scroll">Rates &amp; Fees</a></h6>

            <Link to="/complaint"><h6 className="no-pad"><a href="complaint.html">Complaints</a></h6></Link>

            <Link to='/terms'><h6 className="no-pad"><a href="termsConditions.html" className="page-scroll">Terms & Conditions</a></h6></Link>
          </div>
          <div className="col-sm-3 text-right">
		  <h5>&nbsp;</h5>
            <ul className="list-inline social-icon">
              <li><a href="https://twitter.com/moneyfirstau?s=08" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/MoneyfirstAu"  target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="http://instagram.com/moneyfirst_au"  target="_blank"><i className="fa-brands fa-instagram-square"></i></a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className='copyRight'>© COPYRIGHT 2020. ALL RIGHTS RESERVED.</div>
        </section>
    </>
  )
}

export default Footer