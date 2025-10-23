"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

  const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity -1);
        }
    }
  let incrementStyles = "bg-green-700 hover:bg-green-500 active:bg-amber-700 text-white rounded p-2 m-4 cursor-pointer transition-colors";
    if (quantity >= 20) {
        incrementStyles = "text-gray-300 rounded p-2 m-4 bg-gray-500 cursor-not-allowed";
    }

    let decrementStyles = "bg-red-700 hover:bg-red-500 active:bg-amber-700 text-white rounded p-2 m-4 cursor-pointer transition-colors";
    if (quantity <= 1) {
        decrementStyles = "text-gray-300 rounded p-2 m-4 bg-gray-500 cursor-not-allowed";
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log("Submitting item:", item);

    alert(
      `Item added:\n- Name: ${name}\n- Quantity: ${quantity}\n- Category: ${category}`
    );

    // reset to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow p-6 space-y-5 border border-gray-100"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Muffin"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <main className="p-4">
            <div className="w-full rounded-lg border border-b-gray-300 px-3 py-2 m-1 p-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-serif flex items-center justify-between">
                <p className="text-lg">Item Quantity: {quantity}</p>
                <div className="flex gap-2">
                    <button type="button" onClick={decrement} className={decrementStyles}>
                        (-)
                    </button>
                    <button type="button" onClick={increment} className={incrementStyles}>
                        (+)
                    </button>
                </div>
            </div>
        </main>

      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="w-full rounded-xl px-4 py-2 font-medium bg-blue-600 text-white hover:bg-blue-500 active:scale-[0.99] transition"
      >
        Add Item
      </button>
    </form>
  );
}
