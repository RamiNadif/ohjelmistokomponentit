import React from "react";
import { useState } from "react";
import "./styles/form.css";

const Form = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Estää sivun uudelleenlatauksen

    if (inputValue == "") return;
    const newItem = {
      id: crypto.randomUUID(),
      text: inputValue,
    };

    onAddItem(newItem); // Lähettää uuden ostoksen

    setInputValue(""); // Tyhjentää tekstikentän
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kirjoita ostos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Lisää</button>
      </form>
    </div>
  );
};

export default Form;
