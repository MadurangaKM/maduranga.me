import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { Helmet } from "react-helmet";
const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setFilterWork(data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>My Creative Portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Maduranga Kodithuwakku. A Lead UI/UX Engineer based in Colombo, Sri Lanka. 5+ years of UX Industrial Experience, Crafting Digital Products, Web/Mobile Applications. I have worked with a couple of Enterprises, and UX Companies in Sri Lanka and also worldwide. I design for a user-centered focus. I'm a simple, yet efficient person, a hard worker, and really interested in art. Here is my dribble portfolio: https://dribbble.com/MadurangaDesign "
        />
      </Helmet>
      <h2 className="head-text text_color">
        My Creative <span>Portfolio</span>
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex background" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
                onClick={() => window.open(work.projectLink, "_blank")}
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text text_color">{work.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
