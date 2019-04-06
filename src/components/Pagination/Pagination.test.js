import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Pagination } from "./Pagination";

Enzyme.configure({ adapter: new Adapter() });

describe("Pagination", () => {
  const props = {
    pagenum: "1",
    pagesCount: 20,
    location: { search: "" }
  };

  describe("Pagination: INITIAL", () => {
    const wrapper = shallow(<Pagination {...props} />);

    it("render .pagination", () => {
      expect(wrapper.find(".pagination")).toHaveLength(1);
    });

    it("render .current-page", () => {
      expect(wrapper.find(".current-page")).toHaveLength(1);
    });

    it("render .current-page text", () => {
      expect(wrapper.find(".current-page").text()).toEqual("1/20");
    });

    it("render .btn-off", () => {
      expect(wrapper.find(".btn-off")).toHaveLength(1);
    });
    it("render .btn-off text", () => {
      expect(wrapper.find(".btn-off").text()).toEqual("←");
    });
    it("render 2 <Link /> ", () => {
      expect(wrapper.find("Link")).toHaveLength(1);
    });
  });

  describe("Pagination: change page", () => {
    const nextProps = {
      ...props,
      pagenum: "2"
    };

    const wrapper = shallow(<Pagination {...nextProps} />);

    it("render .current-page text", () => {
      //   wrapper.setProps({ pagenum: "2" });
      expect(wrapper.find(".current-page").text()).toEqual("2/20");
    });

    it("render .btn-off", () => {
      expect(wrapper.find(".btn-off")).toHaveLength(0);
    });

    it("render 2 <Link /> ", () => {
      expect(wrapper.find("Link")).toHaveLength(2);
    });
  });

  describe("Pagination: last page", () => {
    const nextProps = {
      ...props,
      pagenum: "20"
    };

    const wrapper = shallow(<Pagination {...nextProps} />);

    it("render .current-page text", () => {
      expect(wrapper.find(".current-page").text()).toEqual("20/20");
    });

    it("render .btn-off", () => {
      expect(wrapper.find(".btn-off")).toHaveLength(1);
    });

    it("render .btn-off text", () => {
      expect(wrapper.find(".btn-off").text()).toEqual("→");
    });

    it("render 2 <Link /> ", () => {
      expect(wrapper.find("Link")).toHaveLength(1);
    });
  });
});
