import React, { useState } from "react";

function InventoryForm({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || quantity === "") return;

    addItem(name, quantity);
    setName("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit} className="inventory-form">
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button type="submit">Add Item</button>
    </form>
  );
}

export default InventoryForm;