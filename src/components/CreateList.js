import React from "react";

const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

export default function CreateList() {
  const listItems = list.map((item) => <li>{item}</li>);  
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <ul className="list-disc">{listItems}</ul>
    </div>
  );
}

