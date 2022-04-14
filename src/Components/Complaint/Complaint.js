import React from 'react';
import "./complaint.css";



const Complaint = () => {
  return (
    <>
    <div className='complaint-background'>
        <div className='complaint-image'>
        <h2>COMPLAINT</h2>
        </div>
      <div className='container'>
          <div className='complaint-content-part'>
            <p className='complaint-we-make'>We make every effort to ensure that the service we provide is of the highest quality. Your suggestions are extremely important to us. If we haven’t met your expectations, please call us immediately.</p>
            <div className='complaint-form'>
            <h3>COMPLAINT FORM</h3>
            <ol>
                <li><b>Sending a complaint to our Customer Service Department.</b></li>
                <p>You can call us, send us an email, file a complaint by post or fill in the Complaint Form.</p>
                <li><b>In order to process the complaint further, verification of the sender’s identity as well as of transfer order details will be needed.</b></li>
                <p>This is to protect the personal data of our customers and their transactions. Moneyfirst will not provide information on transfers to anyone who fails to pass the identification procedure.</p>
                <li><b>Moneyfirst is obliged to:</b>
                <ul>
                    <li>Resolve the complaint within 15 working days of receiving it.</li>
                    <li>If due to reasons beyond the control of Moneyfirst it is not possible to resolve the complaint within this period, it may be extended to 35 working days.</li>
                </ul>
                    </li>
                <li>In some cases the customer may be additionally requested to submit documents to confirm the complaint situation (e.g. a bank statement).</li>
                <li>If the complaint refers to a bank operating the transaction between Moneyfirst and the customer, Moneyfirst shall be obliged to represent the customer in complaint review process.</li>
          

            <div className="text-left complaint-text-left">
		<div className="row">
          <div className="col-sm-6  bg-gray complaint-form-background">
			<h3>Complaint Form</h3>
            <form id="contactForm" name="sentMessage" novalidate="">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label for="name" className="sr-only control-label">You Name</label>
                  <input id="name" type="text" placeholder="You Name" required="" data-validation-required-message="Please enter name" className="form-control input-lg" /><span className="help-block text-danger"></span>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label for="email" className="sr-only control-label">You Email</label>
                  <input id="email" type="email" placeholder="You Email" required="" data-validation-required-message="Please enter email" className="form-control input-lg" /><span className="help-block text-danger" ></span>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label for="phone" className="sr-only control-label">You Phone</label>
                  <input id="phone" type="tel" placeholder="You Phone" required="" data-validation-required-message="Please enter phone number" className="form-control input-lg" /><span className="help-block text-danger" ></span>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label for="message" className="sr-only control-label">Message</label>
                  <textarea id="message" rows="2" placeholder="Message" required="" data-validation-required-message="Please enter a message." aria-invalid="false" className="form-control input-lg"></textarea><span className="help-block text-danger"></span>
                </div>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-dark">Send a message</button>
            </form>
          </div>
        </div>
	</div>
				<li>If you think that the complaint process outcome is unsatisfactory, you have the right to contact The Financial Ombudsman Service:</li>
                <h5><b>The Financial Ombudsman Service</b></h5>
                <a href='https://www.afca.org.au/make-a-complaint' target="_blank"><p>https://www.afca.org.au/make-a-complaint</p></a>
                </ol>
           </div>
           </div>
        </div>
    </div>
    {/* <div className='money-transfer-complaint'>
               <div className='money-perfect'><b>MONEYFIRST IS THE PERFECT PLATFORM FOR MONEY TRANSFER!</b></div>
               <div className='money-get-it-now'>get it now</div>
           </div> */}
           <section class="action section-small bg-gray2 get-in-now-background">
      <div class="container wow fadeIn">
        <div class="row">
          <div class="col-md-10 money-perfect">
            <h3 class="no-pad"><span class="bold">Moneyfirst</span> is the perfect platform for money transfer!
            </h3>
			
          </div>
          <div class="col-md-2 text-right money-get-it-now"><a href="#" class="btn btn-dark">get it now</a></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Complaint