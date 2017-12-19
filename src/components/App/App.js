import React, { Component } from "react";
import Stacklist from "../Stacklist/Stacklist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <Stacklist />
      </div>
    );
  }
}

export default App;
