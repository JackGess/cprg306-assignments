"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

function cleanItemName(rawName) {
  if (!rawName) return "";

  const noEmoji = rawName.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])/g,
    ""
  );

  const beforeComma = noEmoji.split(",")[0];

  return beforeComma.trim();
}

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="min-h-screen p-8 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold">Access Denied</h1>
        <p className="text-lg">
          You must be logged in to view your shopping list.
        </p>
        <Link
          href="/week-10"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go back to the login page
        </Link>
      </main>
    );
  }

  useEffect(() => {
    async function loadItems() {
      const fetched = await getItems(user.uid);
      setItems(fetched);
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      const saved = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, saved]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanItemName(item.name);
    setSelectedItemName(cleaned);
  };

  return (
    <main className="min-h-screen p-8 space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-tight mb-4 font-serif">
        Shopping List &amp; Meal Ideas
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
