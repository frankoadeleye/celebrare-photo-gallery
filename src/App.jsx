import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <header className="border-b border-stone-200/80 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-rose-900 text-white">
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
              <span className="block text-lg font-bold tracking-tight text-stone-900">
                Photo Gallery
              </span>
              <span className="block text-xs text-stone-500">
                A collection of moments
              </span>
            </span>
          </div>

          <span className="hidden rounded-full border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 sm:inline-flex">
            Photography collection
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-900">
            <span className="size-2 rounded-full bg-rose-800" />
            The art of a moment
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            Every picture
            <span className="block font-normal italic text-rose-900">
              tells a story.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            Discover beautiful photographs, meet the artists behind them, and
            save the moments that speak to you.
          </p>
        </div>

        <Gallery />
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-6 text-center text-xs text-stone-500 sm:px-8 lg:px-12">
          Photo Gallery · Frontend Internship Assignment
        </div>
      </footer>
    </div>
  );
}
