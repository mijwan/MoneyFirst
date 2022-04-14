import React from 'react'
import "./table.css"


const Table = () => {
  return (
    <>
    <div className='table-background' id='table-data'>
        <div className='main-table-area'>
            <div className='table-display'>
            <h2 className='table-header'>SEND  INR(D) Worldwide TO INDIA</h2>
        
            <table className='table1' border="1">
                <thead>
                    <tr className='thead-background'>
                        <th>Send Ammount(AUD)</th>
                        <th>Express Fees</th>
                        <th>Economy Fees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A$20- A$100</td>
                        <td>A$0.00 (10sec)</td>
                        <td>A$0.00 (12hours)</td>
                    </tr>
                    <tr className='middle-background'>
                        <td>A$100- A$500</td>
                        <td>A$0.00 (10sec)</td>
                        <td>A$0.00 (12hours)</td>
                    </tr>
                    <tr>
                        <td>A$500- A$20000</td>
                        <td>A$0.00 (10sec)</td>
                        <td>A$0.00 (12hours)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Table