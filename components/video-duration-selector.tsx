"use client";

type VideoDurationSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function VideoDurationSelector({
  value,
  onChange,
}: VideoDurationSelectorProps) {
  const durations = ["5 Seconds", "10 Seconds", "15 Seconds"];

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-bold">
        ⏱ Video Duration
      </h2>

      <div className="flex flex-wrap gap-3">
        {durations.map((duration) => (
          <button
            key={duration}
            onClick={() => onChange(duration)}
            className={`rounded-xl px-5 py-3 transition ${
              value === duration
                ? "bg-violet-600"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {duration}
          </button>
        ))}
      </div>
    </div>
  );
}