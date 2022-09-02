import React from "react";
import Header from './Components/Header';
import Feature from "./Components/Feature";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Presentation from "./Components/Presentation";
import aboutimage from './images/Frame 19.png'
import aboutimage1 from './images/download.png'
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Lorem ipsum' button='Get the app'/>
      <Presentation/>
      <About image={aboutimage1} title='Lorem ipsum' button='Get the app'/>
      <Contact/>
    </div>
  );
}

export default App;
