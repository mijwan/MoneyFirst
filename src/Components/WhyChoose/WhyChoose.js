import React from 'react'
import "./whychoose.css"



const WhyChoose = () => {
  return (
    <>
    <section>
        <div className='whychoose-background'>
            <h3 className='whychoose-header'>Why Choose Us?</h3>
       
		
		
        <div className="container">
          <div className="row">
          <div className="col-lg-3 col-sm-6 whychoose-content">
          <p><img src='Images/calculator.gif' alt='Low transaction'/></p>
            <h4>SEND & RECEIVE A$ 20</h4>
            <p>We allow our users to send  INR(D) worldwide as low as they want without any fixed minimum limit. You can send & receive A$ 20 with Moneyfirst.</p>
          </div>
          <div className="col-lg-3 col-sm-6 whychoose-content ">
              <p><img src='Images/clock.gif' alt='Anytime anywhere'/></p>
            <h4>Anytime anywhere</h4>
            <p>Our team is working round the clock so that you can get access to this powerful, secure & easy application whenever you want with no boundaries. </p>
          </div>
          <div  className="col-lg-3 col-sm-6 whychoose-content ">
              <p><img src='Images/build.gif' alt='regulated'/></p>
            <h4>GOVT REGISTERED</h4>
            <p>Moneyfirst is registered & regulated with <a href='https://www.austrac.gov.au/' target="_blank">AUSTRAC </a>to provide you with a healthy & safe networking system. Now it's just Moneyfirst, Guardianship & You!</p>
          </div>
          <div  className="col-lg-3 col-sm-6 whychoose-content ">
              <p><img src='Images/user.gif' alt='Referral'/></p>
            <h4>REFER & EARN</h4>
           
		   <p>Invite your friends, family & colleagues to the Moneyfirst app. On every successful invite, get A$ 10 directly in your wallet. Avail of this offer now!</p>
          </div> 
		  
		  
      </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default WhyChoose;