import { useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const [state, setState] = useState(false); //hover중일땐 true, 아닐땐 false
  const ref = useRef(null); //ref설정

  const handleMouseOver = useCallback(() => setState(true), []); //true로 설정
  const handleMouseOut = useCallback(() => setState(false), []); //false로 설정

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver); //이벤트 리스너들 등록
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, handleMouseOut, handleMouseOver]);
  //handle함수도 있어야하나handleMouseOver, handleMouseOut

  // hover올리고 내릴 때만 handleMouseOver handleMouseOut이 원래 재 생성되어야함
  // 그런데 다른 버튼이 있다면 거길 클릭해도 재생성 될거임
  // 그래서 useCallback으로 감싸줌
  // 그러면 첫 렌더링에만 handleMouseOver가 불림

  //근데 useEffect에 handleMouseOut이랑 handleMouseOver를 넣어야하는 이유가 뭔지 모르겟음
  return [ref, state];
};

export default useHover;
