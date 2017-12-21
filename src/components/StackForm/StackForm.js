import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      prompt: "",
      answer: "",
      cards: []
    };
  }

  addCard() {
    const { cards } = this.state;

    cards.push({ id: cards.length, prompt: "", answer: "" });
    this.setState({ cards });
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  render() {
    console.log("StackForm state", this.state);

    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>StackForm</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel> Title </ControlLabel>
            <br />
            {""}
            <FormControl
              onChange={event => this.setState({ title: event.target.value })}
            />
          </FormGroup>
          {this.state.cards.map((card, index) => {
            return (
              <div key={card.id}>
                <br />
                <FormGroup>
                  <ControlLabel>Prompt</ControlLabel>{" "}
                  <FormControl
                    onChange={event =>
                      this.updateCardPart(event, index, "prompt")
                    }
                  />{" "}
                  <ControlLabel>Answer</ControlLabel>
                  <FormControl
                    onChange={event =>
                      this.updateCardPart(event, index, "answer")
                    }
                  />{" "}
                </FormGroup>
              </div>
            );
          })}
        </Form>
        <hr />
        <Button onClick={() => this.addCard()}>Add Card</Button>
      </div>
    );
  }
}

export default StackForm;