import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  console.log("items : ", items);

  const [sortBy, setSortBy] = useState("input");
  let sortedArray = items;
  if (sortBy === "input") sortedArray = items;
  else if (sortBy === "description")
    sortedArray = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedArray = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedArray.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort By input</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed</option>
        </select>
        <button onClick={onClearList}>ClearList</button>
      </div>
    </div>
  );
}
