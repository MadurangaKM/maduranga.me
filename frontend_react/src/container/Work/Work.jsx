import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { Helmet } from "react-helmet";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { images } from "../../constants";
import { AsyncImage } from "loadable-image";
const Work = (props) => {
  const [filterWork, setFilterWork] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("logo");
  const onCloseModal = () => setOpen(false);
  const [logoData, setLogoData] = useState([]);
  const [uxData, setUXData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setFilterWork(data);
    });
    const querylogo = '*[_type == "logoDesign"]';
    client.fetch(querylogo).then((data) => {
      const sortedData = data.sort((a, b) => {
        return Number(a.page) - Number(b.page);
      });

      setLogoData(sortedData);
    });
    const queryux = '*[_type == "uiDesign"]';
    client.fetch(queryux).then((data) => {
      const sortedData = data.sort((a, b) => {
        return Number(a.page) - Number(b.page);
      });

      setUXData(sortedData);
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
        <div className="app__work-item app__flex background">
          <div className="app__work-img app__flex">
            <img src={images.logoDesign} alt={"Logo Design"} />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
              onClick={() => {
                setType("logo");
                setOpen(true);
              }}
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
            <h4 className="bold-text text_color">Logo Design</h4>
          </div>
        </div>
        <div className="app__work-item app__flex background">
          <div className="app__work-img app__flex">
            <img src={images.UIUX} alt={"Logo Design"} />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
              onClick={() => {
                setType("uiux");
                setOpen(true);
              }}
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
            <h4 className="bold-text text_color">UI/UX Design</h4>
          </div>
        </div>
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
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: {
              margin: 0,
              paddingBottom: "20px",
              paddingTop: 0,
              background: props.mode === "dark" ? "#242424ff" : "#ffffff",
            },
          }}
        >
          <div
            className="modal-header"
            style={{
              background: props.mode === "dark" ? "#242424ff" : "#ffffff",
            }}
          >
            <h4
              h4
              style={{
                color: props.mode === "light" ? "#030303" : "#ffffff",
              }}
            >
              {type === "logo" ? "Logo Design" : "UI/UX Design"}
            </h4>
            <span
              className="close-btn"
              onClick={onCloseModal}
              style={{
                color: props.mode === "light" ? "#030303" : "#ffffff",
              }}
            >
              ✕
            </span>
          </div>

          <div className="modal-body">
            <div style={{ margin: "0 auto" }}>
              {type === "logo"
                ? logoData.map((img) => (
                    <AsyncImage
                      key={img.page}
                      src={urlFor(img.image)}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: img.width + "/" + img.height,
                        objectFit: "contain",
                      }}
                      loader={<div style={{ background: "#888" }} />}
                    />
                  ))
                : uxData.map((img) => (
                    <AsyncImage
                      key={img.page}
                      src={urlFor(img.image)}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: img.width + "/" + img.height,
                        objectFit: "contain",
                      }}
                      loader={<div style={{ background: "#888" }} />}
                    />
                  ))}
            </div>
          </div>
        </Modal>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
