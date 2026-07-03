"use client";

import { useState } from "react";

import ImagePromptBox from "@/components/image-prompt-box";
import ImageStyleSelector from "@/components/image-style-selector";
import PromptSuggestions from "@/components/prompt-suggestions";
import AspectRatioSelector from "@/components/aspect-ratio-selector";
import QualitySelector from "@/components/quality-selector";
import ImagePreviewModal from "@/components/image-preview-modal";

export default function ImagesPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  async function generateImage(prompt: string) {
    if (!prompt) return;

    setLoading(true);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Generation Failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setImageUrl(url);
    } catch (error) {
      alert("Image generation failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-4xl font-bold">
        🖼 AI Image Generator
      </h1>

      <p className="mt-3 text-zinc-400">
        Describe anything and let AI create it.
      </p>

      <ImagePromptBox
        onGenerate={generateImage}
        loading={loading}
      />

      <ImageStyleSelector />

      <PromptSuggestions />

      <AspectRatioSelector />

      <QualitySelector />

      <h2 className="mt-10 mb-6 text-2xl font-bold">
        🖼 Generated Image
      </h2>

      {loading ? (
        <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900">
          <p className="animate-pulse text-lg text-violet-400">
            ⏳ AI is generating your image...
          </p>
        </div>
      ) : imageUrl ? (
        <div className="space-y-5">

          <img
            src={imageUrl}
            alt="Generated"
            onClick={() => setShowPreview(true)}
            className="w-full max-w-3xl cursor-zoom-in rounded-2xl border border-zinc-700 transition hover:scale-[1.02]"
          />

          <div className="flex gap-4">

            <a
              href={imageUrl}
              download="ai-image.jpg"
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-700 transition"
            >
              ⬇ Download
            </a>

            <button
              onClick={() => setImageUrl("")}
              className="rounded-xl bg-zinc-800 px-6 py-3 font-semibold hover:bg-zinc-700 transition"
            >
              🗑 Clear
            </button>

          </div>

        </div>
      ) : (
        <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 text-zinc-500">
          Your generated image will appear here.
        </div>
      )}

      {showPreview && (
        <ImagePreviewModal
          imageUrl={imageUrl}
          onClose={() => setShowPreview(false)}
        />
      )}

    </main>
  );
}