import React, { useState } from "react";

export default function CountClicks() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-10">
      <h4>Button has clicked: {count} times</h4>
      <button
        onClick={handleClick}
        className=" px-4 py-2 rounded bg-black text-white text-xl"
      >
        ClicK Me
      </button>
    </div>
  );
}
