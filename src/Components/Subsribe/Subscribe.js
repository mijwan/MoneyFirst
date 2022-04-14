import React from 'react'
import "./subscribe.css"



const Subscribe = () => {
  return (
    <>
    <div className='subscribe-area'>
        <div className='main-subscribe'>
            <div className='subscribe-part'>
              <h2>SUBSCRIBE</h2>
              <p>SIGN-UP FOR NEWS UPDATES AND ALERTS</p>
            </div>
            <div className='subscribe-part1'>
            <input id='name' type="email" placeholder='Email address...'/>
            <span>
                <button type='submit'name='subscribe'>Subscribe</button>
            </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscribe;