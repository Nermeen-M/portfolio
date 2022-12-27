import Header from './components/Header';

import "./assets/styles/style.css"

export default function App() {
  return (
    <div className="App">
      <Header />
      <section id="hero" style={{backgroundColor:"coral", height:"100vh"}}>Hero</section>
      <section id="about" style={{backgroundColor:"gray", height:"100vh"}}>About</section>
    </div>
  );
}