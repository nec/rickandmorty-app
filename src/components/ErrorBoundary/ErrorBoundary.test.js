import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ErrorBoundary from "./ErrorBoundary";

Enzyme.configure({ adapter: new Adapter() });

function ComponentWithError() {
  return null;
}

describe("ErrorBoundary", () => {
  describe("ErrorBoundary catch errors with componentDidCatch", () => {
    it("should catch errors", () => {
      const mockCDC = jest.spyOn(ErrorBoundary.prototype, "componentDidCatch");
      const error = new Error("I am Error");
      const wrapper = shallow(
        <ErrorBoundary>
          <ComponentWithError />
        </ErrorBoundary>
      );
      wrapper.find(ComponentWithError).simulateError(error);
      expect(mockCDC).toHaveBeenCalled();
    });
  });
});
