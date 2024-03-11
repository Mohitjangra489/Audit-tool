import React, { useState } from 'react';
import Css from '../styles/dashboardMainpage.module.css';
import DashboardCard from './DashboardCard';
import DeliveryTruck from '../images/delivery-truck (1).png'
import Cart from '../images/grocery-store.png';
import Issue from '../images/return-box.png';
import Problem from '../images/warning-sign.png';
import Graph from '../images/financial-graphs-and-charts-in-excel.jpg';
import Graph2 from '../images/Slide132-4 (1).png';
import Modal from '../components/Modal';

const DashboardMainpage = () => {
    const [isModalOpen,setisModalOpen]=useState(false);
    const [modalData,setmodalData]=useState("");


  return (  
    <div className={Css.mainContainer}>
     { isModalOpen && <Modal setisModalOpen={setisModalOpen} modalData={modalData} />}  
    <div className={Css.cards_div}>
    <DashboardCard  color={`#0022ff`} src={DeliveryTruck} title={`Shipping`} value={`18`}  setisModalOpen={setisModalOpen} setmodalData={setmodalData} />
    <DashboardCard  color={`#9fe01b`} src={Cart} title={`New Orders`} value={`54`} setisModalOpen={setisModalOpen} setmodalData={setmodalData}/>
    <DashboardCard  color={`#9c27b0`} src={Issue} title={`Return Issues`} value={`345`} setisModalOpen={setisModalOpen} setmodalData={setmodalData}/>
    <DashboardCard  color={`#ff0000`} src={Problem} title={`Problem Invoices`} value={`2`} setisModalOpen={setisModalOpen} setmodalData={setmodalData}/>
    </div>
    <div style={{paddingTop:"80px"}}>
        <img src={Graph} alt='graph_here'/>
        <img src={Graph2} alt='graph_here' style={{width:"50%"}}/>
        </div>
    </div>
  )
}

export default DashboardMainpage
