import React, { useState } from "react";
import { About, Footer, Skills, Work, Hobbies } from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import "./App.scss";
import { images } from "./constants";
import { Helmet } from "react-helmet";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") == null ? "dark" : localStorage.getItem("mode")
  );
  const handleChangeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
  };
  return (
    <div className={mode}>
      <div className="app">
        <Helmet>
          <title>maduranga.me</title>
          <meta
            name="description"
            content=" Hi! I'm Maduranga Kodithuwakku. A Lead UI/UX Engineer based in Colombo, Sri Lanka. 5+ years of UX Industrial Experience, Crafting Digital Products, Web/Mobile Applications. I have worked with a couple of Enterprises, and UX Companies in Sri Lanka and also worldwide. I design for a user-centered focus. I'm a simple, yet efficient person, a hard worker, and really interested in art."
          />
        </Helmet>
        <Navbar onChange={handleChangeMode} mode={mode} />
        <Header circle={mode === "dark" ? images.circle : images.circleWhite} />
        <About />
        <Work />
        <Skills />
        <Hobbies />
        <Footer />
      </div>
    </div>
  );
};

export default App;
