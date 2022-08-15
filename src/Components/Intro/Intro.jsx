import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Intro = () => {

  const transition = {duration : 2, type: 'spring'}


  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I am</span>
            <span>Azamov Usmonali</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and <br /> developer, producting the Quality work.
            </span>
          </div>
          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />

          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />

          <motion.div
            initial={{ left: "-4%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            style={{ top: "-4%", left: "68%" }}
            className="floating-div"
          >
            <FloatinDiv image={Crown} text1="Web" text2="Developer" />
          </motion.div>

          <motion.div
            initial={{ left: "144px", top: "288px" }}
            whileInView={{ left: "0px" }}
            transition={transition}
            style={{ top: "367px", left: "0rem" }}
            className="floating-div"
          >
            <FloatinDiv image={thumbup} text1="Best Design" text2="Award" />
          </motion.div>
          <div className="blur" style={{ backgroud: "rgb(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              backgound: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
            }}
          ></div>
        </div>
      </div>
    );
}

export default Intro;