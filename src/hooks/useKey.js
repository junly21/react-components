import { useCallback, useEffect } from "react";

//부모에서 targetKey랑 handler에 따라 다르게 이벤트 줄건데
const useKey = (event = "keydown", targetKey, handler) => {
  const handleKey = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        handler();
      }
    },
    [targetKey, handler] //targetKey와 handler가 변할 때 handleKey를 다시 생성
  );

  useEffect(() => {
    window.addEventListener(event, handleKey);

    return () => {
      window.removeEventListener(event, handleKey);
    };
  }, [event, targetKey, handleKey]);
  //targetKey와 handler가 변하면 handleKey재생성
  //useEffect랑 useCallback중에 누가 먼저 실행?
};

export default useKey;
