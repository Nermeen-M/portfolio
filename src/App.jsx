import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"

import "./assets/styles/style.css"

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}