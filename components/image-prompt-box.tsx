export default function ImagePromptBox() {
  return (
    <div className="mt-8">

      <label className="mb-3 block text-lg font-semibold">
        Describe your image
      </label>

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Example: A futuristic lion wearing sunglasses in space..."
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none focus:border-violet-500"
        />

        <button className="rounded-xl bg-violet-600 px-8 font-semibold hover:bg-violet-700 transition">
          ✨ Generate
        </button>

      </div>

    </div>
  );
}