import "./App.css";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
