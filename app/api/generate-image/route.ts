import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const imageUrl =
      "https://image.pollinations.ai/prompt/" +
      encodeURIComponent(prompt) +
      "?width=1024&height=1024&nologo=true";

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