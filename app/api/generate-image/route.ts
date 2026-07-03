import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, aspectRatio, style } = await req.json();

    let width = 1024;
    let height = 1024;

    switch (aspectRatio) {
      case "portrait":
        width = 1024;
        height = 1536;
        break;

      case "landscape":
        width = 1536;
        height = 1024;
        break;

      default:
        width = 1024;
        height = 1024;
    }

    let styledPrompt = prompt;

    switch (style) {
      case "Anime":
        styledPrompt = `anime style, vibrant colors, ${prompt}`;
        break;

      case "Cinematic":
        styledPrompt = `cinematic lighting, movie still, ultra detailed, ${prompt}`;
        break;

      case "3D":
        styledPrompt = `3D render, octane render, highly detailed, ${prompt}`;
        break;

      case "Painting":
        styledPrompt = `digital painting, concept art, masterpiece, ${prompt}`;
        break;

      case "Photography":
        styledPrompt = `professional DSLR photography, realistic, 8k, ${prompt}`;
        break;

      default:
        styledPrompt = `ultra realistic, ${prompt}`;
    }

    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(
        styledPrompt
      )}?width=${width}&height=${height}&nologo=true`;

    const response = await fetch(imageUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to generate image." },
        { status: 500 }
      );
    }

    const image = await response.arrayBuffer();

    return new Response(image, {
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}