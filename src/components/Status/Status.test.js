import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Status from "./Status";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterListContainers", () => {
  const props = {
    status: ""
  };

  const mapStatus = {
    Alive: "lime",
    Dead: "red",
    unknown: "#05f"
  };

  describe("Status: INITIAL", () => {
    const wrapper = shallow(<Status {...props} />);

    it("render sup", () => {
      expect(wrapper.find("sup")).toHaveLength(1);
    });

    it("sup text", () => {
      expect(wrapper.find("sup").text()).toEqual("●");
    });
  });

  describe("Status: CHANGE", () => {
    const wrapper = shallow(<Status {...props} />);

    wrapper.setProps({ status: "Alive" });

    it("render props title", () => {
      expect(wrapper.prop("title")).toEqual("Alive");
    });

    it("render props style color", () => {
      expect(wrapper.prop("style")).toEqual({ color: mapStatus["Alive"] });
    });
  });
});
