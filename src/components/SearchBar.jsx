export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <label
        htmlFor="photo-search"
        className="mb-2 block text-sm font-semibold text-zinc-700"
      >
        Search photographers
      </label>

      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>

        <input
          id="photo-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Try searching for a photographer..."
          className="w-full rounded-xl border border-zinc-200 bg-white py-3.5 pl-12 pr-4 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-100"
        />
      </div>
    </div>
  );
}
