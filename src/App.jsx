import Header from "./components/Header"
import Hero from "./components/Hero"

import "./assets/styles/style.css"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="about" style={{backgroundColor:"gray", height:"100vh"}}>About</section>
    </div>
  );
}