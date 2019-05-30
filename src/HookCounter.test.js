import React from "react";
import { mount } from "enzyme";
import HookCounter from "./HookCounter";

describe("<HookCounter />", () => {
  // 스냅샷 매칭 확인
  it("matches shapshot", () => {
    const wrapper = mount(<HookCounter />);
    expect(wrapper).toMatchSnapshot();
  });
  // 증가 버튼 클릭 시뮬레이션 후 텍스트 값 비교
  it("increase", () => {
    const wrapper = mount(<HookCounter />);
    let plusButton = wrapper.findWhere(
      node => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("2");
  });
  // 감소 버튼 클릭시뮬레이션 후 텍스트값 비교
  it("decrease", () => {
    const wrapper = mount(<HookCounter />);
    let plusButton = wrapper.findWhere(
      node => node.type() === "button" && node.text() === "-1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-2");
  });
});
