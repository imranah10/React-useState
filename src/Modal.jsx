import React, { useState } from 'react'

const Modal = () => {
    let [modalstatus ,setModalstatus]=useState(false)
  return (
    <div>
      <button onClick={()=>setModalstatus(!modalstatus)} className='en'>Enquire Now</button>
        <div className={`modaloverlay ${modalstatus?'showmodaloverlay':''}`}>
          <div className={`modaldiv ${modalstatus?'showmodalbox':''}`}>
          <h3 style={{color:'red',textAlign:'center'}}>Enquire Now</h3>
          </div>
          
        </div>
    </div>
  )
}

export default Modal;
