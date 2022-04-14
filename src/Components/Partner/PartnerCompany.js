import React from 'react'
import "./partner.css"


const PartnerCompany = () => {
  return (
    <>
    <div className='partner-background'>
        <div className='partner-main'>

        <div className='partner-image-area'><a  target="_blank" href="https://online.austrac.gov.au/ao/public/rsregister.seam" ><img src="Images/AUSTRAC.png"/> </a></div>

        <div className='partner-image-area'><a  target="_blank" href="https://www.afca.org.au/" ><img src="Images/AFCA_logo_cmyk.png" alt=""/></a></div>

        <div className='partner-image-area middle-partner-image'><a target="_blank"  href="#" ><img src="Images/Satisfaction.png" alt="100% Satisfaction" title="100% Satisfaction"/><p>100% satisfaction or your Money back </p></a></div>

        <div className='partner-image-area'><a href="#" ><img src="Images/Verified & Secured.png"  /></a></div>

        <div className='partner-image-area'><a href="https://connectonline.asic.gov.au/RegistrySearch/faces/landing/panelSearch.jspx?searchText=631693126&searchType=OrgAndBusNm&_adf.ctrl-state=ecdi4wdjg_15" ><img src="Images/ASIC.png"/></a></div>
        </div>
    </div>
    </>
  )
}

export default PartnerCompany