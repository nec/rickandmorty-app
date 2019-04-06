import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterDetails from "./CharacterDetails";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterDetails", () => {
  const props = {
    el: { location: { name: "name" }, origin: { name: "name2" } }
  };

  describe("CharacterDetails: INITIAL", () => {
    const wrapper = shallow(<CharacterDetails {...props} />);

    it("render .character-card", () => {
      expect(wrapper.find(".character-card")).toHaveLength(1);
    });

    it("render <Status/>", () => {
      expect(wrapper.find("Status")).toHaveLength(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
