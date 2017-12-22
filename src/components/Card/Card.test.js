import React from "react";
import { shallow } from "enzyme";
import { Card } from "./Card";

describe("Card", () => {
  const card = shallow(<Card />);
  it("renders the Card", () => {
    console.log(card.debug());
  });
});
