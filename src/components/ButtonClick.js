import React from "react";

export default function ButtonClick() {
  const handleClick1 = () => {
    alert(`Button1 Clicked`);
  };

  const handleClick2 = () => {
    alert(`Button2 clicked`);
  };

  const handleClick3 = () => {
    alert(`Button3 Cliked`);
  };
  return (
    <div className="py-10 flex items-center justify-center gap-3">
      <button
        onClick={handleClick1}
        className="px-4 py-2 bg-gray-500 text-white text-xl rounded hover:bg-lime-300"
      >
        Button1
      </button>
      <button
        onClick={handleClick2}
        className="px-4 py-2 bg-gray-500 text-white text-xl rounded hover:bg-blue-500"
      >
        Button 2
      </button>
      <button
        onClick={handleClick3}
        className="px-4 py-2 bg-gray-500 text-white text-xl rounded hover:bg-lime-300"
      >
        Button 3
      </button>
    </div>
  );
}
