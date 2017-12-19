import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import stacks from "../../data/stacks.json";
import { setStack } from "../../actions";

import "./Stacklist.css";

class Stacklist extends Component {
  render() {
    console.log("stacklist props", this.props);

    return (
      <div>
        {stacks.map(stack => {
          return (
            <Link
              to="/stack"
              key={stack.id}
              onClick={() => {
                this.props.setStack(stack);
              }}
            >
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setStack }, dispatch);
}

const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(Stacklist);
