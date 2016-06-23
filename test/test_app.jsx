import React from "react";
import { assert } from "chai";
import { shallow } from "enzyme";
import { App } from "../src/app";

describe("App", function() {
  it("Should render Hello World!", function() {
    let wrapper = shallow(<App />);
    assert.equal(wrapper.find("h1").text(), "Hello World!");
  });
});
