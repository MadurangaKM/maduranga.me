import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text text_color">
        Contact <span>Me</span>
      </h2>
      <div className="app__footer-cards">
        <div
          className="app__footer-card background-with-shadow"
          onClick={() =>
            window.open("mailto:madurangakodithuwakku@gmail.com", "_blank")
          }
        >
          <img src={images.email} alt="email" />
          <p className="p-text">madurangakodithuwakku@gmail.com</p>
        </div>
        <div
          className="app__footer-card background-with-shadow"
          onClick={() => window.open("tel:+94771646687", "_blank")}
        >
          <img src={images.mobile} alt="phone" />
          <p className="p-text">+94 (77) 1646687</p>
        </div>
        <div
          className="app__footer-card background-with-shadow"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1e3kJtEoflplr2MtV9vfP8H6DU4SVo_je/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img src={images.cv} alt="cv" />
          <p className="p-text">Download My CV </p>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text background-with-shadow text_color border"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text background-with-shadow text_color border"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text background-with-shadow text_color border"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text text_color">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
