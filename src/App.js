import React from "react";
import HeaderText from './components/header.js'
import Footer from './components/footer.js'
import PhotoCard from './components/photoCard.js'
import MenuInputs from './components/inputMenu.js'
import SubmitForm from './components/form.js'
import DatePickers from './components/dateSelector.js'


import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderText />
      <MenuInputs />
      <DatePickers />
      <section>
      <PhotoCard />
       
     </section>
    <SubmitForm />
      <Footer />
    </div>
  );
}

export default App;
