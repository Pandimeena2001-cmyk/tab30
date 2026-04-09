import React from "react";

function InventoryTable({
  items,
  increaseQty,
  decreaseQty,
  deleteItem,
}) {
  return (
    <div className="table-container">
      <div className="table-header">
        <span>Item Name</span>
        <span>Quantity</span>
        <span>Actions</span>
      </div>

      {items.map((item) => (
        <div key={item.id} className="table-row">
          <span>{item.name}</span>
          <span>{item.quantity}</span>
          <span>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default InventoryTable;