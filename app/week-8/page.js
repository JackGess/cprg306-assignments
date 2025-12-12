"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

function cleanItemName(rawName) {
  if (!rawName) return "";

  const noEmoji = rawName.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])/g,
    ""
  );

  const beforeComma = noEmoji.split(",")[0];

  return beforeComma.trim();
}

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  };

  return (
    <main className="min-h-screen p-8 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-tight mb-4 font-serif">
        Shopping List & Meal Ideas
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        <div className="flex-1 space-y-6 max-w-xl w-full">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 max-w-xl w-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

