import React from 'react'
import "./service.css"


const Service = () => {
  return (
    <>
    <div className='service-background'>
        <div className='service-main'>
            <div className='service-part'>
                <h2>WE HAVE MAGIC</h2>
                <p>Users can now send the amount they wish to send this is what Moneyfirst do we want our users to give wings to there money thats the reason we are building wonderful products</p>
                <div className='service-image'>
                    <img src='Images/android-download.png' />
                    <img src='Images/apple-download.png' />
                </div>
            </div>
            <div className='service-part1'>
            
            <div data-thickness="5" data-value="0.98" className="circle"><span></span>
              <div className="agenda">Approved within 10 sec</div>
            </div>
            <div data-thickness="5" data-value=".99" data-type="12" className="circle"><span></span>
              <div className="agenda">Speed of Transaction</div>
            </div>
            <div data-thickness="5" data-value="1" className="circle"><span></span>
              <div className="agenda">Fraud Protection</div>

            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service