import React from 'react'
import "../css/choose.css";
import customer from "../assets/customer-service.png"
const Choose = () => {
  return (
    <div className='choose-us-main'>
     <div className="text-center choose-us">
      <p>WHY CHOOSE US</p>
      <h1 className=''>BENEFITS OF  <span className='orangered'> TECHNOLOGY </span></h1>
      <h1 className='course'>COURSES</h1>
     </div>
     {/* boxes */}
   <div className='flex boxes'>
    <div className='boxes-1 flex-1 border-2 border-gray-900'>
     <div className='flex'>
      <img src={customer}alt="icons" className='girl-img'/>
     </div>
    </div>
    <div className='boxes-2 flex-1 border-2 border-gray-900'></div>
   </div>
    </div>
  )
}

export default Choose;