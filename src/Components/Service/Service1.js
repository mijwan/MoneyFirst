import React from 'react'
import "./service.css"

const Service1 = () => {
  return (
    <>
  <section id="counts" className="counts create-account-background">
  <div className="container container-create">
    <h2 className='service1-header'>OUR SERVICES</h2>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="count-box">          
          
          <i className="fas fa-sync-alt"></i>
          <div className="value purecounter">EXCHANGE RATE</div>
          <div className="choose-title">Moneyfirst gives its customers the highest exchange rate in the industry & believes in quality.</div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div className="count-box">
          
          <i className="fas fa-tv"></i>
          <div className="value purecounter" akhi="42">PLATFORMS</div>
          <div className="choose-title">Get the Moneyfirst services on iOS, Android & Web applications. Download the app now!</div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
         
          <i className="fas fa-business-time"></i>
          <div className="value purecounter" akhi="445">INSTANT TRANSFER</div>
          <div className="choose-title">Moneyfirst covers all the transactions in just a few seconds. Send & receive the money within a blink of an eye!</div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
         
        <i className="fas fa-user-clock"></i>
          <div className="value purecounter" akhi="1050">CUSTOMER SUPPORT</div>
          <div className="choose-title">The Moneyfirst team always delivers quick solutions to all our customers. Just click help & connect with us.</div>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  )
}

export default Service1