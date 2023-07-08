import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { Helmet } from "react-helmet";

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

const Header = (props) => {
  console.log("hello", props);
  return (
    <div className="app__header app__flex">
      <Helmet>
        <title>maduranga.me</title>
        <meta
          name="description"
          content="Hi! I'm Maduranga Kodithuwakku. A Lead UI/UX Engineer based in Colombo, Sri Lanka. 5+ years of UX Industrial Experience, Crafting Digital Products, Web/Mobile Applications. I have worked with a couple of Enterprises, and UX Companies in Sri Lanka and also worldwide. I design for a user-centered focus. I'm a simple, yet efficient person, a hard worker, and really interested in art."
        />
      </Helmet>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex background">
            <span style={{ fontSize: "2.5rem" }} className="wave">
              👋
            </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text text_color_gray">Hello, I am</p>
              <h1 className="head-text text_color">Maduranga</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex background">
            <p
              className="p-text text_color_gray"
              style={{ fontSize: "10px !important" }}
            >
              <Typewriter
                cursorStyle={"|"}
                cursor={true}
                words={[
                  "UI/UX Designer",
                  "Frontend Developer",
                  "Graphic Designer",
                ]}
                loop={false}
              />
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={props.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.graphic, images.uiux, images.code].map((circle, index) => (
          <div
            className="circle-cmp app__flex background"
            key={`circle-${index}`}
          >
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
