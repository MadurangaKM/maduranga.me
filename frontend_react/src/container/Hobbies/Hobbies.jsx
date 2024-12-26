import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactPlayer from "react-player/youtube";
import "./Hobbies.scss";
import { images } from "../../constants";
import { Helmet } from "react-helmet";

const Hobbies = () => {
  return (
    <>
      <Helmet>
        <title>My Hobbies</title>
        <meta
          name="description"
          content="Hi! I'm Maduranga Kodithuwakku. My Hobbies are Drumming & Percussion, Photography"
        />
      </Helmet>
      <h2 className="head-text text_color">
        My <span>Hobbies</span>
      </h2>

      <div className="app__hobbies-container">
        <motion.div
          className="app__hobbies-video"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=WhVArsoNnO8"
            controls={true}
            light={images.youtube}
            width="100%"
            height="18rem"
            loop={true}
          />
        </motion.div>
        <motion.div
          className="app__hobbies-des"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h2 className="bold-text text_color" style={{ marginTop: 20 }}>
            Drumming & Percussion
          </h2>
          <p className="p-text text_color" style={{ marginTop: 10 }}>
            I believe music gives a soul to the universe, wings to the mind,
            flight to the imagination, and life to everything.Therefore to relax
            my mind and for new thoughts, I play the percussion instruments.
          </p>
          <button
            type="button"
            className="p-text"
            onClick={() =>
              window.open(
                "https://www.youtube.com/c/MadurangaKodithuwakku/videos",
                "_blank"
              )
            }
          >
            See My Other Videos
          </button>
        </motion.div>
      </div>
      <div className="app__hobbies-container">
        <motion.div
          className="app__hobbies-video"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img src={images.photos} alt="photos" />
        </motion.div>
        <motion.div
          className="app__hobbies-des"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <h2 className="bold-text text_color" style={{ marginTop: 20 }}>
            Photography
          </h2>
          <p className="p-text text_color" style={{ marginTop: 10 }}>
            I believe photography is a story that fails to be put into words.
            Therefore I like to capture the beauty and the moments in nature.
          </p>
          <button
            type="button"
            className="p-text"
            onClick={() =>
              window.open("https://www.facebook.com/PhotographyRanga", "_blank")
            }
          >
            See My Page
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Hobbies, "app__hobbies"),
  "hobbies",
  "app__primarybg"
);
