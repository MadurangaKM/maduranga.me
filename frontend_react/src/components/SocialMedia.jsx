import React from "react";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() =>
        window.open("https://www.linkedin.com/in/madurangadesign/", "_blank")
      }
      className="background"
    >
      <BsLinkedin />
    </div>
    <div
      className="background"
      onClick={() =>
        window.open(
          "https://www.youtube.com/c/MadurangaKodithuwakku/videos",
          "_blank"
        )
      }
    >
      <BsYoutube />
    </div>
    <div
      className="background"
      onClick={() =>
        window.open("https://www.facebook.com/djmaduranga/", "_blank")
      }
    >
      <FaFacebookF />
    </div>
  </div>
);

export default SocialMedia;
