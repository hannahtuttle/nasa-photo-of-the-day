import React from "react";
import Header from './components/header.js'
import Footer from './components/footer.js'
import PhotoCard from './components/photoCard.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
      
      <PhotoCard />
     </section>
      <Footer />
    </div>
  );
}

export default App;
