"use client";

import CreditCard from "@/components/credit-card";
import { useEffect, useState } from "react";

import ImagePromptBox from "@/components/image-prompt-box";
import ImageStyleSelector from "@/components/image-style-selector";
import PromptSuggestions from "@/components/prompt-suggestions";
import AspectRatioSelector from "@/components/aspect-ratio-selector";
import QualitySelector from "@/components/quality-selector";
import ImagePreviewModal from "@/components/image-preview-modal";
import GeneratedImageCard from "@/components/generated-image-card";

export default function ImagesPage() {
 type ImageItem = {
  id: number;
  imageUrl: string;
  prompt: string;
  style: string;
};

const [credits, setCredits] = useState(10);
const [images, setImages] = useState<ImageItem[]>([]);
 const [imageUrl, setImageUrl] = useState("");
 const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
const [prompt, setPrompt] = useState("");

  const [aspectRatio, setAspectRatio] = useState("square");
  const [style, setStyle] = useState("Realistic");
  useEffect(() => {
  const savedImages = localStorage.getItem("image-history");

  if (savedImages) {
    setImages(JSON.parse(savedImages));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "image-history",
    JSON.stringify(images)
  );
}, [images]);

  async function generateImage(prompt: string) {
    if (!prompt) return;
    if (credits <= 0) {
  alert("❌ No credits left!");
  return;
}

    setLoading(true);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          aspectRatio,
          style,
        }),
      });

      if (!response.ok) {
        throw new Error("Generation Failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setImages((prev) => [
  {
    id: Date.now(),
    imageUrl: url,
    prompt,
    style,
  },
  ...prev,
]);
setCredits((prev) => prev - 1);
    } catch {
      alert("Image generation failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <CreditCard credits={credits} />

      <h1 className="text-4xl font-bold">
        🖼 AI Image Generator
      </h1>

      <p className="mt-3 text-zinc-400">
        Describe anything and let AI create it.
      </p>

      <ImagePromptBox
  prompt={prompt}
  setPrompt={setPrompt}
  onGenerate={generateImage}
  loading={loading}
/>

      <ImageStyleSelector
        value={style}
        onChange={setStyle}
      />

      <PromptSuggestions
  setPrompt={setPrompt}
/>

      <AspectRatioSelector
        value={aspectRatio}
        onChange={setAspectRatio}
      />

      <QualitySelector />

      <div className="mt-10 mb-6 flex items-center justify-between">

  <h2 className="text-2xl font-bold">
    🖼 Recent Creations
  </h2>

  {images.length > 0 && (
    <button
      onClick={() => {
        setImages([]);
        localStorage.removeItem("image-history");
      }}
      className="rounded-xl bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-700"
    >
      🗑 Clear All
    </button>
  )}

</div>

      {loading ? (
  <div className="flex h-96 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900">

  <div className="h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-violet-500"></div>

  <p className="mt-6 text-xl font-semibold text-violet-400">
    Creating your masterpiece...
  </p>

  <p className="mt-2 text-zinc-500">
    Please wait a few seconds.
  </p>

</div>
) : images.length > 0 ? (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    {images.map((img) => (
  <div key={img.id} className="space-y-3">

    <GeneratedImageCard
      imageUrl={img.imageUrl}
      onPreview={() => {
        setImageUrl(img.imageUrl);
        setShowPreview(true);
      }}
      onClear={() =>
        setImages(images.filter((item) => item.id !== img.id))
      }
    />

    <div className="rounded-xl bg-zinc-900 p-4">

      <p className="text-sm text-zinc-400">
        <span className="font-semibold text-white">
          Prompt:
        </span>{" "}
        {img.prompt}
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        <span className="font-semibold text-white">
          Style:
        </span>{" "}
        {img.style}
      </p>

    </div>

  </div>
))}
  </div>
) : (
  <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 text-zinc-500">
    Your generated images will appear here.
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