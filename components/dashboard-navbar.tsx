import { UserButton } from "@clerk/nextjs";
export default function DashboardNavbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-8 py-5">

      <div>
        <h2 className="text-3xl font-bold text-white">
          👋 Welcome Back
        </h2>

        <p className="text-zinc-400 mt-1">
          What would you like to create today?
        </p>
      </div>

      <div className="flex items-center gap-4">

  <button className="rounded-xl bg-violet-600 px-5 py-2 font-semibold hover:bg-violet-700 transition">
    Upgrade Pro
  </button>

  <UserButton afterSignOutUrl="/" />

</div>

    </header>
  );
}