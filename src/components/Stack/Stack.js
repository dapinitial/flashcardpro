import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

import "./Stack.css";

export const Stack = ({ stack: { title, cards } }) => {
  return (
    <div>
      <Link to="/" className="link-home">
        <h4>Home</h4>
      </Link>
      <h3>{title}</h3>
      <br />
      {cards.map(card => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

function mapStateToProps(state) {
  console.log("state", state);
  return {
    stack: state.stack
  };
}

export default connect(mapStateToProps, null)(Stack);
