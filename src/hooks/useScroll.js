import { element } from "prop-types";
import { useEffect, useState, useRef, useCallback } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleScroll = useCallback(() => {
    console.log("ref", ref);
    //첫 렌더링 시에만 실행이잖아요
    //그러면 영원히 ref가 null인 상태여야하는거 아닌가요?
    const element = ref.current;
    setState({
      x: element.scrollLeft,
      y: element.scrollTop,
    });
  }, []);
  //여기에 두면 handleScroll은 처음에만 불림
  //그래서 0,0으로 초기화 된 채의 값을 계속 출력할 줄알았음
  //근데 그냥 0,0이 사라짐.

  //근데 의존성에 ref랑 element추가가 안돼

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // const handleScroll = () => {
    //   setState({
    //     x: element.scrollLeft,
    //     y: element.scrollTop,
    //   });
    // };

    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  //보다보니 handleScroll이 왜 useEffect의 배열에 들어가야하는지 모르겟음

  return [ref, state];
};

export default useScroll;

// const handleScroll = (element) => {
//   console.log("handleScroll", element);
//   setState({
//     x: element.scrollLeft,
//     y: element.scrollTop,
//   });
// };
//여기에 두면 handleScroll은 처음에만 불림
//그래서 0,0으로 초기화 된 채의 값을 계속 출력할 줄알았음
//근데 그냥 0,0이 사라짐.

//근데 의존성에 ref랑 element추가가 안돼
