import React, { useEffect } from 'react';
import Css from '../styles/modal.module.css';

const Modal = ({setisModalOpen,modalData}) => {
    
    useEffect(()=>{
        document.body.style.overflowY="hidden";

        return()=>{
            document.body.style.overflowY="scroll";
        }
    },[])

  return (
    <>
     <div className={Css.modal_backgroundDiv} onClick={()=>setisModalOpen(false)}></div>
    <div className={Css.modal_mainDiv}>
        <h1>{modalData.title + " ("+modalData.value+")"}</h1>
        <p>ndcbdsinsdjdsjndcnsbhj dabhihsfdibd duiuifuibdi</p>
        <div className={Css.modal_btnDiv}>
        <button className={Css.Btn} onClick={()=>setisModalOpen(false)}>Cancel</button>
        <button  className={Css.Btn} onClick={()=>setisModalOpen(false)}> OK</button>
    </div>
    </div>
   
    </>
   
  )
}

export default Modal
