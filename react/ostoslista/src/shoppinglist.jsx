import React from "react";
import Form from "./form";
import { useState } from "react";
import ItemList from "./itemlist";

const Shoppinglist = () => {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), text: "kiivi" },
    { id: crypto.randomUUID(), text: "banaani" },
    { id: crypto.randomUUID(), text: "kaurajuoma" },
  ]);
  const additem = (newitem) => {
    setItems([...items, newitem]);
  };
  const removeitem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div>
        <Form onAddItem={additem} />

        <ItemList items={items} removeitem={removeitem} />
      </div>
    </div>
  );
};

export default Shoppinglist;
