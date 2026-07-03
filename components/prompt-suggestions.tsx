export default function PromptSuggestions() {
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
            className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 transition hover:border-violet-500 hover:bg-zinc-800"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}