import React from "react";
import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  describe("App: INITIAL", () => {
    const wrapper = shallow(<App />);

    it("render .App", () => {
      expect(wrapper.find(".App")).toHaveLength(1);
    });

    it("render <ErrorBoundary/>", () => {
      expect(wrapper.find("ErrorBoundary")).toHaveLength(1);
    });

    it("render <Header/>", () => {
      expect(wrapper.find("Header")).toHaveLength(1);
    });

    it("render <Footer/>", () => {
      expect(wrapper.find("Footer")).toHaveLength(1);
    });

    it("render <Switch/>", () => {
      expect(wrapper.find("Switch")).toHaveLength(1);
    });

    it("render <Route/>", () => {
      expect(wrapper.find("Route")).toHaveLength(4);
    });

    it("renders Snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("404", () => {
    it("Should see 404", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/ghjjk"]}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find("h2").text()).toEqual("404. Page not found");
    });
  });
});
