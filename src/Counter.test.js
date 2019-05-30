import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("<Counter />", () => {
  // 스냅샷 매칭
  it("matches snapshots", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  //초기 state 값 확인
  it("has initial number", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });

  // increase 메소드 확인
  it("increase", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });

  // decrease 메소드 확인
  it("decrease", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });

  // increase 클릭 이벤트 시뮬레이션 state 확인
  it("calls handleIncrease", () => {
    const wrapper = shallow(<Counter />);
    console.log(wrapper);
    const plusButton = wrapper.findWhere(
      node => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    expect(wrapper.state().number).toBe(1);
  });

  // decrease 클릭 이벤트 시뮬레이션 후 엘리먼트 확인
  it("calls handleDecrease", () => {
    const wrapper = shallow(<Counter />);
    const minusButton = wrapper.findWhere(
      node => node.type() === "button" && node.text() === "-1"
    );
    minusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-1");
  });
});
