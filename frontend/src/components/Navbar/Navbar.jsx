import React, { useState } from "react";
import "./Navbar.scss";
import { Images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleMenuClick = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item} </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleMenuClick} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={handleMenuClick} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}{" "}
                  </a>
                </li>
              ))}{" "}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
