import React from 'react'
import "./contact.css"


const ContactUs = () => {
  return (
   <>
   <div className='contactUs-background'>
     <div className='contactUs-main'>
       <div className='contactUs-part'>
           <h3>CONTACT US</h3>
           <p><i className="fas fa-map-marker-alt"></i> BUSINESS IT AND SERVICES PTY LTD T/AS MONEYFIRST , ADD 28 HARRIET LANE , OXENFORD QLD 4210, AUSTRALIA</p>
           <p><i className="fas fa-file"></i>  ACN :  
           <a href='https://asic.gov.au/' target="_blank"> 631 693 126 </a></p>
          <a href='mailto:INFO@MONEYFIRST.COM.AU' target="_blank"><p><i className="fas fa-envelope"></i>  INFO@MONEYFIRST.COM.AU</p></a>
          <a href='tel:+1(7)3184-6424'><p><i className="fas fa-phone"></i> (7)3184-6424</p></a>
       </div>
       <div className='contactUs-part1'>
          <h3>SAY HELLO</h3>
          <input type="text" placeholder='Your Name' id='name' required />
          <input type="text" placeholder='Your Email' id='email' required/>
          <input type="number" placeholder='Your Number' id='number' required/>
          <textarea id='massage' rows='2' placeholder='Massage' required /> 
          <button type='submit' id='submit'>Send</button>
       </div>
     </div>
   </div>
   </>
  )
}

export default ContactUs