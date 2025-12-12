"use client";
import { useMemo, useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");

  const onSortClick = (key) => {
    if (key === sortKey) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sortedItems = useMemo(() => {
    const collator = new Intl.Collator(undefined, { sensitivity: "base" });
    const copy = [...items]; // work on a copy of the prop

    copy.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "quantity") cmp = a.quantity - b.quantity;
      else if (sortKey === "name") cmp = collator.compare(a.name, b.name);
      else if (sortKey === "category") cmp = collator.compare(a.category, b.category);
      return sortDir === "asc" ? cmp : -cmp;
    });

    return copy;
  }, [items, sortKey, sortDir]);

  const Button = ({ active, children, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-3 py-1.5 rounded-md text-sm font-medium transition",
        active
          ? "bg-pink-500 text-white shadow-sm"
          : "bg-indigo-50 text-gray-800 hover:bg-indigo-100",
      ].join(" ")}
    >
      {children}
    </button>
  );

  const DirPill = () => (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-pink-100 text-pink-700">
      {sortDir === "asc" ? "Ascending ↑" : "Descending ↓"}
    </span>
  );

  return (
    <section className="p-5 bg-gradient-to-br from-blue-700 to-indigo-700 text-white rounded-xl shadow-lg max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-semibold">All Items</h2>
        <div className="flex items-center gap-2">
          <Button active={sortKey === "name"} onClick={() => onSortClick("name")}>
            Name
          </Button>
          <Button
            active={sortKey === "category"}
            onClick={() => onSortClick("category")}
          >
            Category
          </Button>
          <Button
            active={sortKey === "quantity"}
            onClick={() => onSortClick("quantity")}
          >
            Quantity
          </Button>
          <DirPill />
        </div>
      </div>

      <ul className="flex flex-wrap gap-4">
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item itemObj={item} onSelect={() => onItemSelect(item)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
