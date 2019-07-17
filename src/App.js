import React from "react";
import Header from './components/header.js'
import Footer from './components/footer.js'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
     </section>
      <Footer />
    </div>
  );
}

export default App;
