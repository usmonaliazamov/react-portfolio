import React from 'react'
import './Contact.css'

import { themeContext } from "../../Context";
import { useContext } from "react";
// import emailjs from '@emailjs/browser'

import {useRef} from "react"
const Contanct = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
    const form = useRef();

    // const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID').then((result) => {
        //     console.log(result.text);
            // setDone(true);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }

    return (
      <div className="contact-from">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <from ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
            />{" "}
            <br />
            <br />
            <input
              type="email"
              name="user_name"
              className="user"
              placeholder="Email"
            />
            <br />
            <br />
            <textarea name="message" className="user" placeholder="Message" />
            <br />
            <br />
            <input type="submit" name="Send" className="button" />
            {/* <span>{ done && "Thanks for contactin me!"}</span> */}
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple" }}
            ></div>
          </from>
        </div>
      </div>
    );
}

export default Contanct;