"use client";

export default function Hero() {
  return (
    <div className="relative w-full h-86 flex items-start justify-start bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 flex flex-col justify-start items-start p-12">
        <div className="flex items-center gap-2">
          <h1 className="text-6xl font-bold text-neutral-100 mb-4 text-left">
            arcunsite
          </h1>
        </div>
        <p className="text-neutral-200 max-w-xl text-lg text-left">
          Choose portfolios based on your taste. We'll help you build it in way
          that performs and gets you hired.
        </p>
      </div>
    </div>
  );
}
