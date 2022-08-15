import React from 'react'
import './Footer.css'

// import Insta from '@iconscout/react-unicons/icons/uil-instagram';
// import Telegram from "@iconscout/react-unicons/icons/uil-telegram";
// import Github from "@iconscout/react-unicons/icons/uil-github";

import Wave from '../../img/wave.png'
const Footer = () => {
    return (
      <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-contact">
          <span>azamovusmonjon@gmail.com</span>
          <div className="f-icons">
            {/* <Insta color="white" size="48px" /> */}
            {/* <Telegram color="white" size="48px" /> */}
            {/* <Github color="white" size="48px" /> */}
          </div>
        </div>
      </div>
    );
}

export default Footer;