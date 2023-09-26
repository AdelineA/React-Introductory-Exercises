import React from "react";
import { ListItems } from "./ListItems";

const list = [
  { dog: "🐕" },
  { cat: "🐈" },
  { chicken: "🐕" },
  { cow: "🐕" },
  { sheep: "🐕" },
  { horse: "🐕" },
];

export default function CreateList() {
  
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <ul className="list-disc">
        {list.map(animal => <ListItems />)}
      </ul>
    </div>
  );
}

