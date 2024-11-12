import React, { useState } from "react";
import "./App.css";

type Tstudent = {
  name: string;
  age: number;
  class: string;
};
const students: Tstudent[] = [
  {
    name: "SonTVA",
    age: 20,
    class: "fe42",
  },
  {
    name: "nguyenkhang",
    age: 20,
    class: "fe42",
  },
  {
    name: "nguyenkhang",
    age: 20,
    class: "fe42",
  },
];

function App() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setInputValue(isNaN(value) ? 0 : value);
  };

  const handleIncrement = () => {
    setCount(count + inputValue);
  };

  const handleDecrement = () => {
    setCount(count - inputValue);
  };

  const renderStudents = () => {
    return students.map((studentItem, index) => (
      <li key={index}>
        {studentItem.name} - {studentItem.age} - {studentItem.class}
      </li>
    ));
  };

  return (
    <div className="App">
      <h3>Count: {count}</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="number" onChange={handleInputChange} />
        <button>Submit</button>
      </form>

      <hr />

      <ul>{renderStudents()}</ul>
    </div>
  );
}

export default App;
