"use client";

import { useState } from "react";

export default function GenerateButton() {
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("🎉 AI Image Generated! (Demo)");
    }, 2000);
  };

  return (
    <div className="mt-10">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`w-full rounded-2xl py-4 text-lg font-bold transition ${
          loading
            ? "cursor-not-allowed bg-zinc-700"
            : "bg-violet-600 hover:bg-violet-700"
        }`}
      >
        {loading ? "⏳ Generating..." : "✨ Generate Image"}
      </button>
    </div>
  );
}