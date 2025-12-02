"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  let incrementStyles =
    "bg-green-600 hover:bg-green-500 active:bg-green-700 text-white rounded-md px-3 py-1 transition";
  if (quantity >= 20)
    incrementStyles =
      "bg-gray-400 text-gray-200 rounded-md px-3 py-1 cursor-not-allowed";

  let decrementStyles =
    "bg-red-600 hover:bg-red-500 active:bg-red-700 text-white rounded-md px-3 py-1 transition";
  if (quantity <= 1)
    decrementStyles =
      "bg-gray-400 text-gray-200 rounded-md px-3 py-1 cursor-not-allowed";

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log("Submitting item:", item);
    alert(
      `Item added:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white rounded-xl p-5 space-y-4 shadow-lg max-w-md mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm mb-1 font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Muffin"
          className="w-full rounded-md px-3 py-2 bg-indigo-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="rounded-md px-3 py-2 bg-blue-800 flex items-center justify-between border border-blue-500">
        <p className="text-sm font-medium text-white">
          Quantity: {quantity}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={decrement} className={decrementStyles}>
            −
          </button>
          <button type="button" onClick={increment} className={incrementStyles}>
            +
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm mb-1 font-semibold">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-md px-3 py-2 bg-indigo-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 rounded-lg active:scale-[0.98] transition"
      >
        Add Item
      </button>
    </form>
  );
}
