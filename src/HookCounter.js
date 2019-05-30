import React, { useState, useCallback } from "react";

const HookCounter = () => {
  // state 사용
  const [number, setNumber] = useState(0);
  // 증가 함수
  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  // 감소 함수
  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default HookCounter;
