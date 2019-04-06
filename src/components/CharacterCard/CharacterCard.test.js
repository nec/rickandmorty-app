import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterCard from "./CharacterCard";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterCard", () => {
  const props = {
    el: {}
  };

  describe("CharacterCard: INITIAL", () => {
    const wrapper = shallow(<CharacterCard {...props} />);

    it("render .pers-card", () => {
      expect(wrapper.find(".pers-card")).toHaveLength(1);
    });

    it("render .pers-descr", () => {
      expect(wrapper.find(".pers-descr")).toHaveLength(1);
    });

    it("render <Status/>", () => {
      expect(wrapper.find("Status")).toHaveLength(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
