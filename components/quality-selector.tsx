"use client";

import { useState } from "react";

export default function QualitySelector() {
  const [quality, setQuality] = useState("Fast");

  const options = ["Fast", "HD", "Ultra"];

  return (
    <div className="mt-8">

      <h2 className="mb-4 text-xl font-bold">
        ⭐ Quality
      </h2>

      <div className="flex flex-wrap gap-4">

        {options.map((item) => (
          <button
            key={item}
            onClick={() => setQuality(item)}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              quality === item
                ? "bg-violet-600"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      <p className="mt-4 text-zinc-400">
        Selected Quality: <span className="text-violet-400">{quality}</span>
      </p>

    </div>
  );
}