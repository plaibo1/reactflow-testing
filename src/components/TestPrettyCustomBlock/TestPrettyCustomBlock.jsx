export const TestPrettyCustomBlock = () => {
  const onClick = () => {
    alert("click");
  };

  return (
    <div className="p-16 rounded-xl bg-slate-100">
      <div className="font-bold text-xl mb-4">TestPrettyCustomBlock</div>
      <button
        onClick={onClick}
        className="bg-indigo-500 px-5 py-2 rounded-lg w-full text-white font-bold border-2 border-slate-700"
      >
        click me
      </button>
    </div>
  );
};
