import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CharacterListContainers as Clcont } from "./CharacterListContainers";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterListContainers", () => {
  const props = {
    match: {
      params: { id: "1" }
    },
    reducerCharacters: { info: { pages: 10 } },
    isFetching: false,
    error: {},
    location: { search: "" },
    actionAsync: () => {}
  };

  describe("CharacterListContainers: INITIAL", () => {
    const mockFetchCharacters = jest.fn();
    const nextProps = {
      ...props,
      actionAsync: mockFetchCharacters
    };
    const wrapper = shallow(<Clcont {...nextProps} />);

    it("render empty <h1> with error", () => {
      expect(wrapper.find("h1").text()).toEqual(" ");
    });

    it("not render <CharacterList/>", () => {
      expect(wrapper.find("CharacterList")).toHaveLength(0);
    });

    it("not render <Filter />", () => {
      expect(wrapper.find("Filter")).toHaveLength(0);
    });

    it("dispatch actionAsync() method receives from props", () => {
      expect(mockFetchCharacters).toHaveBeenCalledTimes(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterListContainers: isFetching", () => {
    const nextProps = {
      ...props,
      error: null,
      isFetching: true
    };

    const wrapper = shallow(<Clcont {...nextProps} />);

    it("render <Loading />", () => {
      expect(wrapper.find("Loading")).toHaveLength(1);
    });

    it("render <Filter />", () => {
      expect(wrapper.find("Filter")).toHaveLength(1);
    });

    it("not render <CharacterList/>", () => {
      expect(wrapper.find("CharacterList")).toHaveLength(0);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterListContainers: render <CharacterList />", () => {
    const nextProps = {
      ...props,
      error: null
    };

    const wrapper = shallow(<Clcont {...nextProps} />);

    it("not render <Loading />", () => {
      expect(wrapper.find("Loading")).toHaveLength(0);
    });

    it("render <Filter />", () => {
      expect(wrapper.find("Filter")).toHaveLength(1);
    });

    it("render <CharacterList/>", () => {
      expect(wrapper.find("CharacterList")).toHaveLength(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterListContainers: render with ERROR", () => {
    const nextProps = {
      ...props,
      error: { status: "404", statusText: "not found" }
    };

    const wrapper = shallow(<Clcont {...nextProps} />);

    it("not render <Loading />", () => {
      expect(wrapper.find("Loading")).toHaveLength(0);
    });

    it("not render <Filter />", () => {
      expect(wrapper.find("Filter")).toHaveLength(0);
    });

    it("not render <CharacterList/>", () => {
      expect(wrapper.find("CharacterList")).toHaveLength(0);
    });

    it("render h1 with error", () => {
      expect(wrapper.find("h1")).toHaveLength(1);
    });

    it("render h1 error text message", () => {
      expect(wrapper.find("h1").text()).toEqual("404 not found");
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterListContainers: componentDidUpdate() change id", () => {
    const mockFetchCharacters = jest.fn();

    const nextProps = {
      ...props,
      error: null,
      // location: { search: "?gender=male" },
      actionAsync: mockFetchCharacters
    };

    const wrapper = shallow(<Clcont {...nextProps} />);

    it("dispatch actionAsync() 2 times cDU ", () => {
      wrapper.setProps({ match: { params: { id: "2" } } });
      expect(mockFetchCharacters).toHaveBeenCalledTimes(2);
    });

    it("render <CharacterList/>", () => {
      expect(wrapper.find("CharacterList")).toHaveLength(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterListContainers: componentDidUpdate() change location", () => {
    const mockFetchCharacters = jest.fn();

    const nextProps = {
      ...props,
      error: null,
      actionAsync: mockFetchCharacters
    };

    const wrapper = shallow(<Clcont {...nextProps} />);

    it("dispatch actionAsync() cDU (2 times)", () => {
      wrapper.setProps({ location: { search: "?gender=male" } });
      expect(mockFetchCharacters).toHaveBeenCalledTimes(2);
    });
    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
