import Link from "next/link";
import DashboardSidebar from "@/components/dashboard-sidebar";
import DashboardNavbar from "@/components/dashboard-navbar";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <DashboardSidebar />

      <div className="flex-1">
        <DashboardNavbar />

        <section className="p-8">
          <h2 className="text-2xl font-bold">
            🚀 AI Studio Dashboard
          </h2>

          <p className="mt-3 text-zinc-400">
            Your creative workspace is getting ready...
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            <Link href="/dashboard/images">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-violet-500 hover:scale-105 transition cursor-pointer">
                <h3 className="text-xl font-bold">🖼 AI Images</h3>
                <p className="mt-2 text-zinc-400">
                  Generate amazing AI images.
                </p>
              </div>
            </Link>

            <Link href="/dashboard/videos">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-violet-500 hover:scale-105 transition cursor-pointer">
                <h3 className="text-xl font-bold">🎬 AI Videos</h3>
                <p className="mt-2 text-zinc-400">
                  Create cinematic AI videos.
                </p>
              </div>
            </Link>

            <Link href="/dashboard/thumbnails">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-violet-500 hover:scale-105 transition cursor-pointer">
                <h3 className="text-xl font-bold">🎨 Thumbnails</h3>
                <p className="mt-2 text-zinc-400">
                  Design eye-catching thumbnails.
                </p>
              </div>
            </Link>

            <Link href="/dashboard/music">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-violet-500 hover:scale-105 transition cursor-pointer">
                <h3 className="text-xl font-bold">🎵 AI Music</h3>
                <p className="mt-2 text-zinc-400">
                  Generate royalty-free music.
                </p>
              </div>
            </Link>

          </div>
        </section>
      </div>
    </main>
  );
}