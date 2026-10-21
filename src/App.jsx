import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="border-b border-zinc-200/80 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Stillframe home"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </span>

            <span>
              <span className="block text-lg font-bold tracking-tight text-zinc-950">
                Stillframe
              </span>
              <span className="block text-xs text-zinc-500">
                A world of photographs
              </span>
            </span>
          </a>

          <span className="hidden rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 sm:inline-flex">
            Photo gallery
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
            <span className="size-2 rounded-full bg-violet-600" />A little
            inspiration
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Moments worth
            <span className="block text-zinc-400">looking at twice.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Explore a collection of photographs, discover the people behind
            them, and keep the images you love close.
          </p>
        </div>

        <Gallery />
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-6 text-center text-xs text-zinc-500 sm:px-8 lg:px-12">
          Stillframe · A photo gallery powered by the Picsum Photos API
        </div>
      </footer>
    </div>
  );
}
