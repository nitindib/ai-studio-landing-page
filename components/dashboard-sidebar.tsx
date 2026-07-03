import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">

      <h1 className="text-3xl font-bold text-violet-400 mb-10">
        AI Studio
      </h1>

      <nav className="space-y-4">

        <Link
          href="/dashboard"
          className="block rounded-xl bg-violet-600 px-4 py-3 font-semibold hover:bg-violet-700 transition"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/dashboard/images"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900 transition"
        >
          🖼 AI Images
        </Link>

        <Link
          href="/dashboard/videos"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900 transition"
        >
          🎬 AI Videos
        </Link>

        <Link
          href="/dashboard/thumbnails"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900 transition"
        >
          🎨 Thumbnails
        </Link>

        <Link
          href="/dashboard/music"
          className="block rounded-xl px-4 py-3 hover:bg-zinc-900 transition"
        >
          🎵 AI Music
        </Link>

      </nav>

    </aside>
  );
}