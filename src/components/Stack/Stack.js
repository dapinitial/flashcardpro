import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Stack.css";

class Stack extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>Stack</h3>
      </div>
    );
  }
}

export default Stack;
