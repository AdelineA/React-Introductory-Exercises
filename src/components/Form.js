import React, { useState } from "react";

export default function Form() {
  const [fName, setFName] = useState("");
  const [lName,setLName] = useState("")

  const handleChange1 = (e)=>{
    setFName(e.target.value);
  }

  const handleChange = (e)=>{
    setLName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${fName} ${lName}`)
    setFName('');
    setLName('');
    
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
      <input type="text" placeholder="Fname" name="Fname" value={fName} onChange={handleChange1} className="w-96 h-10 border-2 px-2 py-1 " />
      <input type="text" placeholder="Lname" name='Lname' value={lName} onChange={handleChange} className="w-96 h-10 border-2 px-2 py-1" />
      <button
        type="submit"
        className="bg-red-500 px-6 py-3 rounded w-96 h-10 font-bold text-2xl"
      >
        Greet Me
      </button>
    </form>
  );
}
