import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import { TestPrettyCustomBlock } from "./components/TestPrettyCustomBlock/TestPrettyCustomBlock";
import { TestPanelBlock } from "./components/TestPanelBlock/TestPanelBlock";
import { TextUpdaterNode } from "./components/TextUpdaterNode/TextUpdaterNode";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: <TestPrettyCustomBlock /> },
    position: { x: 400, y: 125 },
    className: "w-fit",
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 420 },
  },
  {
    id: "4",
    type: "textUpdater",
    data: { data: { value: "Output Node" } },
    position: { x: 450, y: 420 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", label: "im label" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
    [setEdges]
  );

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Panel position="top-left">
            <TestPanelBlock setNodes={setNodes} />
          </Panel>
          <Controls />
          <MiniMap />
          <Background
            className="bg-orange-100"
            variant="dots"
            gap={23}
            size={1}
          />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
