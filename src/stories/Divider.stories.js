import Divider from "../component/Divider";
import Text from "../component/Text/Text";
export default {
  title: "Component/Divider",
  component: Divider,
};

export const Default = () => {
  return (
    <>
      <Divider></Divider>
    </>
  );
};

export const Horizontal = () => {
  return (
    <>
      <div>위</div>
      <Divider type="horizontal"></Divider>
      <div>아래</div>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <Text>왼</Text>
      <Divider type="vertical"></Divider>
      <Text>오</Text>
    </>
  );
};
