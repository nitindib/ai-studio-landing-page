type HistoryImageCardProps = {
  imageUrl: string;
  prompt: string;
  onPreview: () => void;
  onDelete: () => void;
};

export default function HistoryImageCard({
  imageUrl,
  prompt,
  onPreview,
  onDelete,
}: HistoryImageCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

      <img
        src={imageUrl}
        alt={prompt}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">

        <p className="line-clamp-2 text-sm text-zinc-300">
          {prompt}
        </p>

        <div className="mt-4 flex gap-2">

          <button
            onClick={onPreview}
            className="flex-1 rounded-lg bg-violet-600 py-2 font-semibold hover:bg-violet-700"
          >
            👀 Preview
          </button>

          <button
            onClick={onDelete}
            className="rounded-lg bg-red-600 px-4 hover:bg-red-700"
          >
            🗑
          </button>

        </div>

      </div>

    </div>
  );
}