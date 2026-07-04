"use client";

type GeneratedImageCardProps = {
  imageUrl: string;
  onPreview: () => void;
  onClear: () => void;
};

export default function GeneratedImageCard({
  imageUrl,
  onPreview,
  onClear,
}: GeneratedImageCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500">

      <img
        src={imageUrl}
        alt="Generated"
        onClick={onPreview}
        className="w-full cursor-zoom-in rounded-xl"
      />

      <div className="mt-4 flex flex-wrap gap-3">

        <a
          href={imageUrl}
          download="ai-image.jpg"
          className="rounded-xl bg-green-600 px-5 py-3 font-semibold transition hover:bg-green-700"
        >
          ⬇ Download
        </a>

        <button
          onClick={onPreview}
          className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-700"
        >
          🔍 Preview
        </button>

        <button
          onClick={onClear}
          className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold transition hover:bg-zinc-700"
        >
          🗑 Clear
        </button>

      </div>

    </div>
  );
}