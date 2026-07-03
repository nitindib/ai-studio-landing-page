"use client";

type ImageStyleSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function ImageStyleSelector({
  value,
  onChange,
}: ImageStyleSelectorProps) {
  const styles = [
    "Realistic",
    "Cinematic",
    "Anime",
    "3D",
    "Painting",
    "Photography",
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">
        🎨 Choose Style
      </h2>

      <div className="flex flex-wrap gap-4">
        {styles.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              value === item
                ? "bg-violet-600"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-4 text-zinc-400">
        Selected Style:{" "}
        <span className="text-violet-400">{value}</span>
      </p>
    </div>
  );
}