"use client";

type PromptSuggestionsProps = {
  setPrompt: (value: string) => void;
};

export default function PromptSuggestions({
  setPrompt,
}: PromptSuggestionsProps) {
  const suggestions = [
    {
      label: "🔥 Viral",
      prompt: "Viral YouTube thumbnail, ",
    },
    {
      label: "🍔 Food",
      prompt: "Professional food photography, ",
    },
    {
      label: "🚀 Sci-Fi",
      prompt: "Futuristic sci-fi world, ",
    },
    {
      label: "🎨 Anime",
      prompt: "Anime style, ",
    },
    {
      label: "🏰 Fantasy",
      prompt: "Fantasy art, ",
    },
    {
      label: "📸 DSLR",
      prompt: "Professional DSLR photography, ",
    },
    {
      label: "💎 Luxury",
      prompt: "Luxury lifestyle, ",
    },
    {
      label: "🎮 Gaming",
      prompt: "Gaming artwork, ",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">
        💡 Smart Suggestions
      </h2>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item.label}
            onClick={() => setPrompt(item.prompt)}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 transition hover:border-violet-500 hover:bg-zinc-800"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}