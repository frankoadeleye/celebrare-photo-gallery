import { useState } from "react";

export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-shadow duration-200 ease-out hover:shadow-lg hover:shadow-stone-200/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {!imageLoaded && !imageError && (
          <div
            className="absolute inset-0 animate-pulse bg-stone-200"
            aria-hidden="true"
          />
        )}

        {imageError ? (
          <div className="flex size-full items-center justify-center px-4 text-center text-sm text-stone-500">
            Image unavailable
          </div>
        ) : (
          <img
            src={photo.download_url}
            alt={`Photograph by ${photo.author}`}
            loading="lazy"
            decoding="async"
            width="640"
            height="480"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`size-full object-cover transition-opacity duration-200 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove photograph by ${photo.author} from favourites`
              : `Add photograph by ${photo.author} to favourites`
          }
          aria-pressed={isFavourite}
          className="absolute right-3 top-3 inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-700 focus-visible:ring-offset-2"
        >
          <svg
            viewBox="0 0 24 24"
            className={`size-5 transition-colors duration-200 ${
              isFavourite
                ? "fill-rose-800 text-rose-800"
                : "fill-none text-stone-600"
            }`}
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 py-3">
        <p className="min-w-0 truncate text-sm font-medium text-stone-800">
          {photo.author}
        </p>

        {isFavourite && (
          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-rose-800">
            <svg
              viewBox="0 0 20 20"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="m5 10 3.2 3.2L15 6.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Saved
          </span>
        )}
      </div>
    </article>
  );
}
