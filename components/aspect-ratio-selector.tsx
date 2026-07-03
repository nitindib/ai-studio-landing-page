"use client";

type AspectRatioSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function AspectRatioSelector({
  value,
  onChange,
}: AspectRatioSelectorProps) {
  const options = [
    { label: "⬜ Square", value: "square" },
    { label: "📱 Portrait", value: "portrait" },
    { label: "🖥 Landscape", value: "landscape" },
  ];

  return (
    <div className="mt-8">

      <h2 className="mb-4 text-xl font-bold">
        📐 Aspect Ratio
      </h2>

      <div className="flex flex-wrap gap-4">

        {options.map((item) => (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              value === item.value
                ? "bg-violet-600"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {item.label}
          </button>
        ))}

      </div>

    </div>
  );
}