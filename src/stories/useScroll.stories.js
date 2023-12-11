import styled from "@emotion/styled";
import useScroll from "../hooks/useScroll";

export default {
  title: "Hook/useScroll",
};

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: royalblue;
  overflow: auto;
`;

const Inner = styled.div`
  width: 1000px;
  height: 1000px;
  background-image: linear-gradient(120deg, #000, #fff);
`;

export const Default = () => {
  const [scrollRef, location] = useScroll();
  // console.log(location);
  return (
    <>
      <Box ref={scrollRef}>
        <Inner></Inner>
      </Box>
      {location.x} {location.y}
    </>
  );
};
