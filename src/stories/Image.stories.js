import Image from "../component/Image";

export default {
  title: "Component/Image",
  component: Image,
  argTypes: {
    lazy: { control: "boolean" },
    src: {
      type: { name: "string", require: true },
      control: { type: "text" },
    },
    placeholder: {
      type: { name: "string" },
      control: { type: "text" },
    },
    threshold: { control: "number" },
    width: { control: { type: "range", min: 200, max: 600 } },
    height: { control: { type: "range", min: 200, max: 600 } },
    alt: { control: "string" },
    mode: {
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
    block: { control: "boolean" },
  },
  args: {
    lazy: false,
    src: "https://picsum.photos/200",
    placeholder: "https://via.placeholder.com/200",
    threshold: 0.5,
    width: 200,
    height: 200,
    mode: "cover",
  },
};

export const Default = (args) => {
  return <Image {...args}>dsdsds</Image>;
};

export const Lazy = (args) => {
  return (
    <div>
      {" "}
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} lazy block src={`${args.src}?${i}`} key={i}></Image>
      ))}
    </div>
  );
};
