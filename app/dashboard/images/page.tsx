import ImagePromptBox from "@/components/image-prompt-box";
import ImageStyleSelector from "@/components/image-style-selector";
import PromptSuggestions from "@/components/prompt-suggestions";

export default function ImagesPage() {
  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-4xl font-bold">
        🖼 AI Image Generator
      </h1>

      <p className="mt-3 text-zinc-400">
        Describe anything and let AI create it.
      </p>

      <ImagePromptBox />

      <ImageStyleSelector />

      <PromptSuggestions />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
          Image 1
        </div>

        <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
          Image 2
        </div>

        <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
          Image 3
        </div>

        <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
          Image 4
        </div>
      </div>
    </main>
  );
}