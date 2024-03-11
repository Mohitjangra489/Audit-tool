import React from 'react';
import Css from '../styles/dashboardMainpage.module.css';

const DashboardCard = ({ color,src,title,value,setisModalOpen,setmodalData}) => {


    const handleModalOpening =()=>{
        setmodalData({title,value});
         setisModalOpen(true)
    }

  return (
    <div className={Css.DashboardCard_container} style={{backgroundColor:color}} onClick={handleModalOpening}>
      <div>
          <img src={src} alt='cardimage' style={{height:"60px"}}/>
      </div>
      <div className={Css.DashboardCard_container_titlediv}>
        <span>{title}</span>
        <span>{value}</span>
      </div>
    </div>
  )
}

export default DashboardCard
