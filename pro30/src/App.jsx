import React, { useState } from "react";
import "./App.css";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", quantity: 5 },
    { id: 2, name: "Mouse", quantity: 10 },
    { id: 3, name: "Keyboard", quantity: 7 },
  ]);

  // Add new item
  const addItem = (name, quantity) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
    };
    setItems([...items, newItem]);
  };

  // Increase quantity
  const increaseQty = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>Inventory Manager</h1>
      <InventoryForm addItem={addItem} />
      <InventoryTable
        items={items}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;