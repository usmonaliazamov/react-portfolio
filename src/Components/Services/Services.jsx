import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
 import Humble from "..//../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";


const Services = () => {
  const transition = {duration: 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
      <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>services</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem{" "}
            <br /> ipsum is simpley dummy text of printing
          </spane>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ backgroud: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="cards">
          
          <motion.div
            whileInView={{ left: "350px" }}
            initial={{ left: "25%" }}
            transition={transition}
            style={{ left: "350px" }}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, GitHub, Notion, Photoshop, Canva"}
            />
          </motion.div>
          {/* second card */}
          <div style={{ top: "150px" }}>
            <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"Html, Css, JavaScript, React"}
            />
          </div>
          {/* card 3d */}
          <div style={{ top: "340px", left: "300px" }}>
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={"Lorem ispum dummy text are usually use in section where"}
            />
          </div>
          <div
            className="blur s-blur2"
            style={{ backgroud: "var(--purple)" }}
          ></div>
        </div>
      </div>
    );
}

export default Services
