import React from 'react';
import BodyCss from '../styles/body.module.css'

const FacilityCard = ({src,title,description}) => {
  return (
    <div className={BodyCss.fourthdiv_carddiv}  data-aos="fade-up"  data-aos-duration="1000"  >
    <img src={src} alt='image_here' className={BodyCss.fourthdiv_cardimage}/> 
    <span>{title}</span>
    <p className={BodyCss.cardpara}>{description}</p>
    </div>
  )
}

export default FacilityCard
