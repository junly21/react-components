import Text from "../component/Text/Text";

export default {
  title: "Component/Text",
  component: Text,
  argTypes: {
    size: { control: "number" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    delete: { control: "boolean" },
    color: { control: "color" },
    block: { control: "boolean" },
    paragraph: { control: "boolean" },
    mark: { control: "boolean" },
    code: { control: "boolean" },
  },
};

export const CustomStory = (args) => {
  return (
    <>
      <Text {...args}>TEXT</Text>
    </>
  );
};

export const Size = (args) => {
  return (
    <>
      <Text {...args} size="large">
        Tesxt23
      </Text>
      <Text {...args} size="normal">
        Tesxt23
      </Text>
      <Text {...args} size="small">
        Tesxt23
      </Text>
    </>
  );
};
