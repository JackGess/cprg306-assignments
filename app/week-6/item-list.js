"use client";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Items</h2>

      <ul className="flex flex-wrap gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <Item itemObj={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
