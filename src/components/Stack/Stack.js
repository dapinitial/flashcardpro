import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Stack.css";

class Stack extends Component {
  render() {
    //console.log("stack props", this.props);
    const { title, cards } = this.props.stack;
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>{title}</h3>
        <hr />
        {cards.map(card => {
          return <div key={card.id}>{card.prompt}</div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stack: state
  };
}

export default connect(mapStateToProps, null)(Stack);
