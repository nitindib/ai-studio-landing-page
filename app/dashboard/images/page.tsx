"use client";

import { useState } from "react";

import ImagePromptBox from "@/components/image-prompt-box";
import ImageStyleSelector from "@/components/image-style-selector";
import PromptSuggestions from "@/components/prompt-suggestions";
import AspectRatioSelector from "@/components/aspect-ratio-selector";
import QualitySelector from "@/components/quality-selector";
import ImagePreviewModal from "@/components/image-preview-modal";
import GeneratedImageCard from "@/components/generated-image-card";

export default function ImagesPage() {
 const [images, setImages] = useState<string[]>([]);
 const [imageUrl, setImageUrl] = useState("");
 const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
const [prompt, setPrompt] = useState("");

  const [aspectRatio, setAspectRatio] = useState("square");
  const [style, setStyle] = useState("Realistic");

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
          aspectRatio,
          style,
        }),
      });

      if (!response.ok) {
        throw new Error("Generation Failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      setImages((prev) => [url, ...prev]);
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

      <h2 className="mt-10 mb-6 text-2xl font-bold">
        🖼 Recent Creations
      </h2>

      {loading ? (
  <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900">
    <p className="animate-pulse text-lg text-violet-400">
      ⏳ AI is generating your image...
    </p>
  </div>
) : images.length > 0 ? (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    {images.map((img, index) => (
      <GeneratedImageCard
        key={index}
        imageUrl={img}
        onPreview={() => {
          setImageUrl(img);
          setShowPreview(true);
        }}
        onClear={() =>
          setImages(images.filter((_, i) => i !== index))
        }
      />
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