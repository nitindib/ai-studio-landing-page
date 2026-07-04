"use client";

type AspectRatioSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function AspectRatioSelector({
  value,
  onChange,
}: AspectRatioSelectorProps) {
  const ratios = [
    {
      label: "⬜ Square",
      value: "square",
    },
    {
      label: "📱 Portrait",
      value: "portrait",
    },
    {
      label: "🖥 Landscape",
      value: "landscape",
    },
  ];

  return (
    <div className="mt-4">
      <h2 className="mb-3 text-lg font-bold">
        📐 Aspect Ratio
      </h2>

      <div className="flex flex-wrap gap-3">
        {ratios.map((item) => (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`rounded-full px-5 py-2 font-semibold transition ${
              value === item.value
                ? "bg-violet-600 text-white"
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