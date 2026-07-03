"use client";

import { useState } from "react";

export default function PromptSuggestions() {
  const [selected, setSelected] = useState("🔥 Viral");

  const suggestions = [
    "🔥 Viral",
    "🍔 Food",
    "🚀 Sci-Fi",
    "🎨 Anime",
    "🏰 Fantasy",
    "📸 DSLR",
    "💎 Luxury",
    "🎮 Gaming",
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">
        💡 Smart Suggestions
      </h2>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`rounded-full px-5 py-2 transition ${
              selected === item
                ? "bg-violet-600 text-white"
                : "border border-zinc-700 bg-zinc-900 hover:border-violet-500 hover:bg-zinc-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-4 text-zinc-400">
        Selected Suggestion:{" "}
        <span className="text-violet-400">{selected}</span>
      </p>
    </div>
  );
}