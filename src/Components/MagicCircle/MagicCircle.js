import React from 'react'
import "./magicCircle.css"

const MagicCircle = () => {
  return (
    <>
    <div className='magicCircle-background'>
      <div className="magicCircle-main container">
        <div className='row'>
          <div className="magic-part col-lg-6 ">
            <h3>We have magic</h3>
            <p>Moneyfirst presents a hassle-free process to send  INR(D) worldwide instantly to your loved ones abroad. We want our users to give wings to their money, sit back, show patience & see the magic of Moneyfirst!</p>
		  <a href='https://play.google.com/store/apps/details?id=com.bhanguz.MoneyFirstApp' target="_blank" ><img src="Images/android-download.png" alt="google play"/></a>
      <a href='https://apps.apple.com/app/id1528141137' target="_blank" ><img src="Images/apple-download.png" alt="App store"/></a>
          </div>

<div className="progress-circle-container col-lg-5">
<div className='progress-bar-background'>

<div className='main-progessbar'>
<div className="progress-circle progress-98"><span>98</span></div>
<div className='progress-bar-content'>Approved <br/> within 10 sec</div>
</div>

<div className='main-progessbar'>
  <div className="progress-circle progress-99"><span>99</span></div>  
<div className='progress-bar-content'>Speed of <br/> Transaction</div>
</div>

<div className='main-progessbar'>
  <div className="progress-circle progress-100"><span>100</span></div> 
  <div className='progress-bar-content'>Fraud <br/> Protection</div>
  </div>

  </div> 
</div>
</div>

      </div>
    </div>

    </>
  )
}

export default MagicCircle