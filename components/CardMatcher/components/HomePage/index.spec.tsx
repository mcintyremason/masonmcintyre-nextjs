import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import HomePage from ".";

const wrapper = shallow(<HomePage />);

describe("HomePage Component", () => {
  it("renders Card Matcher header", () => {
    expect(wrapper.find({ variant: "h2" }).text()).to.equal("Card Matcher");
  });
});
