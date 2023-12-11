import Upload from "../component/Upload";

export default {
  title: "Component/Upload",
  component: Upload,
};

export const Default = () => {
  return (
    <>
      <Upload>
        <button>Click</button>
      </Upload>
    </>
  );
};

export const AccessFile = () => {
  return (
    <Upload>{(file) => <button>{file ? file.name : "clickme"}</button>}</Upload>
  );
};

export const Droppable = () => {
  return (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 300,
            border: "1px solid black",
            borderColor: dragging ? "black" : "gray",
          }}
        >
          {file ? file.name : "드래그"}
        </div>
      )}
    </Upload>
  );
};
