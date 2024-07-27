import React from 'react';
import successMantraImg from '../../assets/success_mantra_img.webp'; // Adjust path as necessary
import { FaCheck } from 'react-icons/fa6'; // Make sure react-icons is installed

import "../../css/Home/HomeP3.css";
import img from '../../assets/image.png';

const HomeP3 = () => {
  return (
    <div id="know_after" style={{ backgroundColor: '#ebeef3', paddingBottom: '0px', zIndex: 0 , margin:0, padding:0}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="running_centres">
              <h3 className='heading-h3'>Success Mantra</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="order-0" className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="centre_icon mt-3">
              <h3 className='heading-info'>Remedial Methodology</h3>
              <p className='parag'>
                <FaCheck className='icon-check'/>&nbsp;Bridge knowledge gaps on the go
                
              </p>
              <p className='parag'>

                
                <FaCheck className='icon-check' />&nbsp;Know after every test where you stand &amp; what to do next
                
              </p>
            </div>
            <div className="mobileNoOutter" style={{ display: 'none' }}>
              <input type="text" name="mobilePhone2" id="mobilePhone2" placeholder="Get SMS with Link on your Mobile" />
              <input
                type="button"
                value="Get App Link"
                className="mobilebutton"
                id="sms_but"
                // onClick={() => ajaxmsg('mobilePhone2')}
              />
              <div id="RspoceDataDiv" style={{ display: 'none' }}></div>
            </div>
          </div>
          <div id="order-1" className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="Centre-img">
              <img src={successMantraImg} alt="Success Mantra" />
            </div>
          </div>
        </div>
      </div>

      <svg className="svg_grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 9" preserveAspectRatio="none" fill="currentColor">
  <path fill="#FFFFFF" d="M144.54,9H0V0H144.54ZM0,0S32.36,9,72.27,9,144.54,0,144.54,0" />
</svg>


    </div>
      );
};

      export default HomeP3;
