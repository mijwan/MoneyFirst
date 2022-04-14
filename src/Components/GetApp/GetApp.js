import React from 'react'
import "./getApp.css"

const GetApp = () => {
  return (
    <>
    <div className="downloadContainer getApp-background">
      <div className="container">
        <div className="row ">
          <div
            className="col-12 col-lg-6 my-auto downloadButtons" data-aos="fade-up" >
            <h2>GET THE APP</h2>
             <p>Keep track of your transfers on the go with the Moneyfirst mobile app. Make new or repeat transfers - wherever you are - at the touch of a button.</p>

            <div className='image-getApp'>
            <span className='getImage-area'><a href='https://play.google.com/store/apps/details?id=com.bhanguz.MoneyFirstApp' target="_blank"><img src='Images/google.png' /></a>
            <div className="starr">
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     </div></span>
            <span className='getImage-area'><a href='https://apps.apple.com/app/id1528141137' target="_blank"><img src='Images/app.png' /></a>
            <div className="starr">
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     <span className="fa fa-star checked"></span>
                     </div></span>
            </div>
            <p>Simply scan code and download the app now.</p>
            <img src='Images/scanAPP.jpeg'/>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-down">
            <div className="rightImage">
              <img
                src="Images/get-app-1.jpg"
                alt="Download Paypenny App"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default GetApp