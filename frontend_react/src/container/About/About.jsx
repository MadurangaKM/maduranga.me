import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { Helmet } from "react-helmet";
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="Hi! I'm Maduranga Kodithuwakku. I started my career as a graphic designer. After being an expert in graphic designing I have expanded my path as a creative motion graphic designer. I took another step forward and became a UI/UX Designer. I have 5+ years of UX Industrial Experience in designing web and mobile applications. Again I have expanded my path to the Frontend Developer."
        />
      </Helmet>
      <h2 className="head-text text_color">
        About <span>Me</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text text_color" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text text_color_gray" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
