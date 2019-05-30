import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matchers snapshot", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    // 스냅샷 확인
    expect(wrapper).toMatchSnapshot();
  });

  it("renders username and name", () => {
    const wrapper = mount(<Profile username="velopert" name="김민준" />);
    // props 확인
    expect(wrapper.props().username).toBe("velopert");
    expect(wrapper.props().name).toBe("김민준");
    // dom 확인
    const boldElement = wrapper.find("b");
    expect(boldElement.contains("velopert")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("(김민준)");
  });
});
