"use client";

import { useState } from "react";

import ImagePromptBox from "@/components/image-prompt-box";
import VideoStyleSelector from "@/components/video-style-selector";
import VideoDurationSelector from "@/components/video-duration-selector";
import AspectRatioSelector from "@/components/aspect-ratio-selector";
import QualitySelector from "@/components/quality-selector";

export default function VideosPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [style, setStyle] = useState("Cinematic");
  const [duration, setDuration] = useState("5 Seconds");
  const [aspectRatio, setAspectRatio] = useState("landscape");

  async function generateVideo(prompt: string) {
    if (!prompt) return;

    setLoading(true);

    console.log({
      prompt,
      style,
      duration,
      aspectRatio,
    });

    setTimeout(() => {
      alert(
        `🎬 Video Generation\n\nStyle: ${style}\nDuration: ${duration}\nAspect Ratio: ${aspectRatio}\n\n(API connection next step 😎)`
      );

      setLoading(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-4xl font-bold">
        🎬 AI Video Generator
      </h1>

      <p className="mt-3 text-zinc-400">
        Create cinematic AI videos from your ideas.
      </p>

      <ImagePromptBox
        prompt={prompt}
        setPrompt={setPrompt}
        onGenerate={generateVideo}
        loading={loading}
        label="Describe your video"
        placeholder="Example: A dragon flying over futuristic Tokyo at sunset..."
      />

      <VideoStyleSelector
        value={style}
        onChange={setStyle}
      />

      <VideoDurationSelector
        value={duration}
        onChange={setDuration}
      />

      <AspectRatioSelector
        value={aspectRatio}
        onChange={setAspectRatio}
      />

      <QualitySelector />

      <h2 className="mt-10 mb-6 text-2xl font-bold">
        🎥 Generated Video
      </h2>

      <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900">
        <p className="text-xl text-zinc-500">
          🎬 Your generated video will appear here.
        </p>
      </div>

    </main>
  );
}