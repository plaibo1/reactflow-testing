/* eslint-disable react/prop-types */
const fakeData = [
  { id: 1, label: "fake data list" },
  { id: 2, label: "fake data list data data" },
  { id: 3, label: "fake list" },
  { id: 4, label: "data fake list" },
  { id: 5, label: "awesome data list" },
];

const generateNode = (label = "") => {
  return {
    id: new Date().toDateString(),
    type: "textUpdater",
    data: { label },
    position: { x: 0, y: 0 },
  };
};

export const TestPanelBlock = ({ setNodes }) => {
  const addNode = () => {
    setNodes((prev) => [...prev, generateNode("i am generated node")]);
  };

  return (
    <div className="py-8 px-5 rounded-xl backdrop-blur-xl bg-white/30">
      <div className="font-bold text-xl mb-4">Test panel block</div>
      <ul>
        {fakeData.map((item) => {
          return (
            <li key={item.id} className="py-1 text-sm">
              {item.label}
            </li>
          );
        })}
      </ul>

      <button
        onClick={addNode}
        className="px-5 py-2 rounded-md mt-4 bg-indigo-500 text-white font-extrabold"
      >
        generate node
      </button>
    </div>
  );
};
