import React from "react";
import HeaderText from './components/header.js'
import Footer from './components/footer.js'
import PhotoCard from './components/photoCard.js'
import MenuInputs from './components/inputMenu.js'


import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderText />
      <MenuInputs />
      <section>
      
      <PhotoCard />
     </section>
      <Footer />
    </div>
  );
}

export default App;
