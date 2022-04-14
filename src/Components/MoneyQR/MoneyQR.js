import React from 'react'
import "./moneyQr.css";

const MoneyQR = () => {
  return (
    <>
    
    <div className='moeny-background'>
        <div className='container'>
        <div className='money-QR-main'>
            <div className='money-QR-part'>
                <h3>QUICK CONNECT WITH MONEYFIRST AU</h3>
                <p>WhatsApp Business Account</p>
                <img src='Images/au-qr-code.png' alt='QR' />
                <p>Scan this code to start a WhatsApp chat with Moneyfirst AU.</p>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}

export default MoneyQR