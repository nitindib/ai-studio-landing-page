"use client";

type CreditCardProps = {
  credits: number;
};

export default function CreditCard({
  credits,
}: CreditCardProps) {
  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl border border-violet-700 bg-zinc-900 p-6">
      <div>
        <h2 className="text-2xl font-bold">
          ⭐ AI Credits
        </h2>

        <p className="mt-2 text-zinc-400">
          Remaining Credits
        </p>
      </div>

      <div className="text-right">
        <p className="text-4xl font-bold text-violet-400">
          {credits}
        </p>

        <p className="text-zinc-500">
          / 10
        </p>
      </div>
    </div>
  );
}