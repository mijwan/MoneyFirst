import React from 'react'
import"./about.css"

const About = () => {
  return (
    <>
     <section id="about" className="section-small about-main-background">
	
  <div className="container about-background" id='about-page' data-aos="fade-up">
    <div className="row">
      <div className="col-lg-6 about-header">
        <h3>About Us</h3>
        {/* <h4 className="classic">Moneyfirst was born of frustration</h4> */}
        <p className="no-pad">Moneyfirst has developed a team of industrious people to protect and serve our customers a convenient & fast platform to remit money overseas easily. Moneyfirst was founded in 2019 in Australia, and since then our community is expeditiously growing with trust & notable services. Sending  INR(D) worldwide abroad is deceptively expensive, thanks to the hidden charges we’ve all been forced to pay. The banks claim “free money transfers” and “0% commission” and it sounds like money is already flowing freely, but far from us. We know this is pure propaganda!</p>
        <p>Moneyfirst removes all the wrongness, letting people send  INR(D) worldwide abroad at the lowest possible true cost. Using only real exchange rates and no-extra-hidden charges. It's time to turn your heads high and join hands with Moneyfirst to begin the unforgettable journey for our loved ones. Headaches averted, and a revolution sparked! </p>
        <h2 className="classic classic-team">Moneyfirst Team</h2>
      </div>
      {/* <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-5 col-lg-offset-1 wow zoomIn"> */}
      <div className="col-lg-5 about-image">
            <img src='Images/screen-1.png' alt='about Image' />
    </div>
      </div>
      </div>

</section>
    </>
  )
}

export default About