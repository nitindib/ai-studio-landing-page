"use client";

type ImagePromptBoxProps = {
  prompt: string;
  setPrompt: (value: string) => void;
  onGenerate: (prompt: string) => void;
  loading: boolean;
};

export default function ImagePromptBox({
  prompt,
  setPrompt,
  onGenerate,
  loading,
}: ImagePromptBoxProps) {
  return (
    <div className="mt-8">
      <label className="mb-3 block text-lg font-semibold">
        Describe your image
      </label>

      <div className="flex gap-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: A futuristic lion wearing sunglasses in space..."
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none focus:border-violet-500"
        />

        <button
          onClick={() => onGenerate(prompt)}
          disabled={loading}
          className={`rounded-xl px-8 font-semibold transition ${
            loading
              ? "cursor-not-allowed bg-zinc-700"
              : "bg-violet-600 hover:bg-violet-700"
          }`}
        >
          {loading ? "⏳ Generating..." : "✨ Generate"}
        </button>
      </div>
    </div>
  );
}