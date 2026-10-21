export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <img
          src={photo.download_url}
          alt={`Photograph by ${photo.author}`}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove photograph by ${photo.author} from favourites`
              : `Add photograph by ${photo.author} to favourites`
          }
          aria-pressed={isFavourite}
          className={`absolute right-3 top-3 flex size-10 items-center justify-center rounded-full shadow-md backdrop-blur transition ${
            isFavourite
              ? "bg-white text-rose-600"
              : "bg-white/90 text-zinc-600 hover:bg-white hover:text-rose-600"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill={isFavourite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-900">
            {photo.author}
          </p>
          <p className="mt-1 text-xs text-zinc-500">Photographer</p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
            isFavourite
              ? "bg-rose-50 text-rose-700"
              : "bg-zinc-100 text-zinc-500"
          }`}
        >
          {isFavourite ? "Saved" : "Photo"}
        </span>
      </div>
    </article>
  );
}
