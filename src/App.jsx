import React from "react";

import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Tabs from "./components/Tabs";
import Posts from "./components/Posts";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Preloader />
      <header>
        <Nav />
        <Profile />
      </header>
      <main>
        <Tabs />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
