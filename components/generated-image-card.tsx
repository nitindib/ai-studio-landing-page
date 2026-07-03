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
    <div className="space-y-5">

      <img
        src={imageUrl}
        alt="Generated"
        onClick={onPreview}
        className="w-full rounded-2xl border border-zinc-700 cursor-zoom-in transition hover:scale-[1.02]"
      />

      <div className="flex flex-wrap gap-3">

        <a
          href={imageUrl}
          download="ai-image.jpg"
          className="rounded-xl bg-green-600 px-5 py-3 font-semibold hover:bg-green-700 transition"
        >
          ⬇ Download
        </a>

        <button
          onClick={onPreview}
          className="rounded-xl bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-700 transition"
        >
          🔍 Preview
        </button>

        <button
          onClick={onClear}
          className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold hover:bg-zinc-700 transition"
        >
          🗑 Clear
        </button>

      </div>

    </div>
  );
}