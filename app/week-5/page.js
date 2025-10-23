"use client";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-semibold mb-6 mt-6 text-center">New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}

