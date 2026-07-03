"use client";

import { useState } from "react";

export default function AspectRatioSelector() {
  const [ratio, setRatio] = useState("Square");

  const ratios = [
    "Square",
    "Portrait",
    "Landscape",
  ];

  return (
    <div className="mt-8">

      <h2 className="mb-4 text-xl font-bold">
        📐 Aspect Ratio
      </h2>

      <div className="flex flex-wrap gap-4">

        {ratios.map((item) => (
          <button
            key={item}
            onClick={() => setRatio(item)}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              ratio === item
                ? "bg-violet-600"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      <p className="mt-4 text-zinc-400">
        Selected Ratio:{" "}
        <span className="text-violet-400">
          {ratio}
        </span>
      </p>

    </div>
  );
}