import { useState, useEffect } from "react";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

import "./assets/styles/style.css";

export default function App() {
  const[modal, setModal]= useState(null);
  const[projectsList, setProjectsList]= useState([]);
  const[techList, setTechList]= useState([]);

    useEffect(() => {
        fetch(
            'data.json'
            ).then(response => {
                return response.json();
            }).then(data => {
                setProjectsList(data.Projects);
                setTechList(data.Technologies);
            });
    }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects projectsList={projectsList} setModal={setModal} />
      <Technologies techList={techList} />
      <Footer />
      <Modal modalState={[modal, setModal]} />
    </div>
  );
}