import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CharacterDetailsContainer as Cdcont } from "./CharacterDetailsContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("CharacterDetailsContainer", () => {
  const props = {
    match: {
      params: { id: "1" }
    },
    pers: {},
    isFetching: false,
    error: {},
    asyncActionPers: () => {}
  };

  describe("CharacterDetailsContainer: INITIAL", () => {
    const mockFetchPers = jest.fn();
    const nextProps = {
      ...props,
      asyncActionPers: mockFetchPers
    };
    const wrapper = shallow(<Cdcont {...nextProps} />);

    it("render empty <h1> with error", () => {
      expect(wrapper.find("h1").text()).toEqual(" ");
    });

    it("not render <CharacterDetails/>", () => {
      expect(wrapper.find("CharacterDetails")).toHaveLength(0);
    });

    it("dispatch asyncActionPers() method receives from props", () => {
      expect(mockFetchPers).toHaveBeenCalledTimes(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterDetailsContainer: isFetching", () => {
    const nextProps = {
      ...props,
      error: null,
      isFetching: true
    };

    const wrapper = shallow(<Cdcont {...nextProps} />);

    it("render <Loading />", () => {
      expect(wrapper.find("Loading")).toHaveLength(1);
    });

    it("not render <CharacterDetails/>", () => {
      expect(wrapper.find("CharacterDetails")).toHaveLength(0);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterDetailsContainer: render <CharacterDetails />", () => {
    const nextProps = {
      ...props,
      error: null
    };

    const wrapper = shallow(<Cdcont {...nextProps} />);

    it("not render <Loading />", () => {
      expect(wrapper.find("Loading")).toHaveLength(0);
    });

    it("render <CharacterDetails/>", () => {
      expect(wrapper.find("CharacterDetails")).toHaveLength(1);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("CharacterDetailsContainer: render with ERROR", () => {
    const nextProps = {
      ...props,
      error: { status: "404", statusText: "not found" }
    };

    const wrapper = shallow(<Cdcont {...nextProps} />);

    it("not render <Loading />", () => {
      expect(wrapper.find("Loading")).toHaveLength(0);
    });

    it("not render <CharacterDetails/>", () => {
      expect(wrapper.find("CharacterDetails")).toHaveLength(0);
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
});
