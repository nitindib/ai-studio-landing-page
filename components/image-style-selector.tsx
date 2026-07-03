export default function ImageStyleSelector() {
  return (
    <div className="mt-8">

      <h2 className="mb-4 text-xl font-bold">
        🎨 Choose Style
      </h2>

      <div className="flex flex-wrap gap-4">

        <button className="rounded-xl bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-700 transition">
          Realistic
        </button>

        <button className="rounded-xl bg-zinc-900 px-5 py-3 hover:bg-zinc-800 transition">
          Cinematic
        </button>

        <button className="rounded-xl bg-zinc-900 px-5 py-3 hover:bg-zinc-800 transition">
          Anime
        </button>

        <button className="rounded-xl bg-zinc-900 px-5 py-3 hover:bg-zinc-800 transition">
          3D
        </button>

        <button className="rounded-xl bg-zinc-900 px-5 py-3 hover:bg-zinc-800 transition">
          Painting
        </button>

        <button className="rounded-xl bg-zinc-900 px-5 py-3 hover:bg-zinc-800 transition">
          Photography
        </button>

      </div>

    </div>
  );
}