import React from 'react'
import './Footer.css'
import copyright from '../images/Copyright.svg'

const Footer = () => {
  function CurrentYearComponent() {
    const currentYear = new Date().getFullYear();
  
    return <span>{currentYear}</span>;
  }
  
  return (
    <>
      <div id='footer'>
         <p className='rightJustify s' id='copyright'><img src={copyright} alt='copyright symbol' width='12' /> <CurrentYearComponent /> Aretetic Solutions, LLC</p>
         </div>
    </>
  )
}

export default Footer