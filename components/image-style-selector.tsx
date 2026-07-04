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
    <div className="mt-4">
      <h2 className="mb-4 text-xl font-bold">
        🎨 Choose Style
      </h2>

      <div className="flex flex-wrap gap-3">
        {styles.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`rounded-full px-5 py-2 font-semibold transition ${
              value === item
                ? "bg-violet-600 text-white"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}