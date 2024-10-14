import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import profile from "../../assets/profile.png";
import Loading from "../../components/Loading";
import ProfileImg from "./ProfileImg";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
function header() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profile;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return imageLoaded ? (
    <div>
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Waleed</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Web Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <ProfileImg />
          {/* <img src={profile} alt="Profile Image" /> */}
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={Images.circle}
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[Images.flutter, Images.redux, Images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="Circles" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default AppWrap(header, "home");
