import Header from "../component/Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 5 } },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <>
      <Header {...args}>Header</Header>
    </>
  );
};
