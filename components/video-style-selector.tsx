"use client";

type VideoStyleSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function VideoStyleSelector({
  value,
  onChange,
}: VideoStyleSelectorProps) {
  const styles = [
    "Cinematic",
    "Anime",
    "Realistic",
    "3D",
    "Drone",
    "Fantasy",
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">
        🎬 Choose Video Style
      </h2>

      <div className="flex flex-wrap gap-3">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => onChange(style)}
            className={`rounded-xl px-5 py-3 transition ${
              value === style
                ? "bg-violet-600"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
}