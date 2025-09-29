"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

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

    return (
        <main className="p-4">
            <h1 className="text-3xl m-4 font-extrabold font-serif">Item Counter</h1>
            <p className="bg-blue-400 m-4 p-4 rounded-2xl w-80 shadow-lg font-bold font-serif">Item Quantity: {quantity}</p>
            <button onClick={increment} className={incrementStyles}>Increase (+)</button>
            <button onClick={decrement} className={decrementStyles}>Decrease (-)</button>
        </main>
    )
}