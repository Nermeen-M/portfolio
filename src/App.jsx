import { useState } from "react";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import "./assets/styles/style.css";

export default function App() {
  const[modal, setModal]= useState(null);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects setModal={setModal} />

      <Modal modalState={[modal, setModal]} />
    </div>
  );
}