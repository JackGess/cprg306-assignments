"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
    );

    if (!response.ok) {
      console.error("Failed to fetch meals");
      return [];
    }

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    async function loadMealIdeas() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="bg-slate-900 text-white rounded-xl p-5 shadow-lg min-h-[250px]">
      <h2 className="text-2xl font-semibold mb-3">
        Meal ideas{ingredient ? ` for "${ingredient}"` : ""}
      </h2>

      {!ingredient && (
        <p className="text-sm text-slate-300">
          Select an item from the shopping list to see meal ideas that use that
          ingredient.
        </p>
      )}

      {ingredient && meals.length === 0 && (
        <p className="text-sm text-slate-300">
          No meal ideas found for this ingredient. Try another item.
        </p>
      )}

      {meals.length > 0 && (
        <ul className="space-y-2 mt-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-slate-800 rounded-lg px-3 py-2 text-sm hover:bg-slate-700 transition"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
