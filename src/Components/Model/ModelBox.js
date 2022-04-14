import React from 'react'
import "./model.css";

const ModelBox = ( { setShowModal, showModal }) => {
   // console.log(showModal);
   
  return (
    <>
             <div className="container mt-3" id='model-main-screen'>  
                  {/* <a className="nav-link" href="" data-bs-toggle="modal" data-bs-target="#myModal">
                    Sign Up
                  </a> */}
                  </div>
                  
                  <div className={ showModal ? "modal show": "modal"} id="myModal">
                     <div className="modal-dialog">
                        <div className="modal-content">    
                           <div className="modal-header">
                                <h4 className="modal-title screen-model-title">GET THE APP</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={ () => setShowModal(false)}></button>
                              </div>      
                       <div className="modal-body">
                       Keep track of your transfers on the go with the Moneyfirst mobile app. Make new or repeat transfers - wherever you are - at the touch of a button.<br/>
                       <div className='image-getApp'>
                   <span className='getImage-area'><a href='https://play.google.com/store/apps/details?id=com.bhanguz.MoneyFirstApp' target=""><img src='Images/google.png' /></a>
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
              <div className='model-scan'>
                 <p>Simply scan code and download the app now.</p>
                     <img src='Images/scanAPP.jpeg'/>
                   </div>
                       </div>      
                   <div className="modal-footer">
                      <button type="button" onClick={ () => setShowModal(false)} className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                       </div>
                     </div>
                   </div>
                </div>
    </>
  )
}

export default ModelBox

