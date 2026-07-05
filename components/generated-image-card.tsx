"use client";

type GeneratedImageCardProps = {
  imageUrl: string;
  onPreview: () => void;
  onClear: () => void;
  favorite?: boolean;
  onFavorite?: () => void;
};

export default function GeneratedImageCard({
  imageUrl,
  onPreview,
  onClear,
  favorite,
  onFavorite,
}: GeneratedImageCardProps) {
  return (
    <div className="space-y-5">

      <img
        src={imageUrl}
        alt="Generated"
        onClick={onPreview}
        className="w-full cursor-zoom-in rounded-2xl border border-zinc-700 transition hover:scale-[1.02]"
      />

      <div className="flex flex-wrap gap-3">

        <button
          onClick={onFavorite}
          className="rounded-xl bg-pink-600 px-5 py-3 font-semibold transition hover:bg-pink-700"
        >
          {favorite ? "❤️ Favorited" : "🤍 Favorite"}
        </button>

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