import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterList from "./CharacterList";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterList", () => {
  const props = {
    characters: {
      results: []
    },
    id: "1",
    pagesCount: 20
  };

  describe("CharacterList: INITIAL", () => {
    const wrapper = shallow(<CharacterList {...props} />);

    it("render .wrapper_cat", () => {
      expect(wrapper.find(".wrapper_cat")).toHaveLength(1);
    });

    it("render .pers-grid", () => {
      expect(wrapper.find(".pers-grid")).toHaveLength(1);
    });

    it("render <CharacterCard/>", () => {
      expect(wrapper.find("CharacterCard")).toHaveLength(0);
    });

    it("render 2 <Pagination /> wrapped withRouter", () => {
      expect(wrapper.find("withRouter(Pagination)")).toHaveLength(2);
    });
  });

  describe("CharacterList: render list", () => {
    const nextProps = {
      ...props,
      characters: {
        results: [{ id: 1 }, { id: 2 }, { id: 3 }]
      }
    };

    const wrapper = shallow(<CharacterList {...nextProps} />);

    it("render <CharacterCard/> 3 times", () => {
      expect(wrapper.find("CharacterCard")).toHaveLength(3);
    });
  });
});
