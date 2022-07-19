import React from "react";
import { About, Footer, Header, Skills, Work, Hobbies } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Hobbies/>
      <Footer />
    </div>
  );
};

export default App;
