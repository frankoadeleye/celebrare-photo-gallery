import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer } from "../reducers/favouritesReducer";
import { loadFavourites, saveFavourites } from "../utils/storage";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites,
  );

  const [searchTerm, setSearchTerm] = useState("");

  // Persist reducer state whenever the favourites list changes.
  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  // Keep the event handler stable between renders.
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // Recalculate the filtered list only when its dependencies change.
  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return photos;
    }

    return photos.filter((photo) => photo.author.toLowerCase().includes(query));
  }, [photos, searchTerm]);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photoId,
    });
  }, []);

  return (
    <section aria-label="Photo gallery">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
            The collection
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
            Discover photographs
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Explore moments captured by photographers around the world.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white px-4 py-3">
          <p className="text-xs text-zinc-500">Photographs</p>
          <p className="mt-1 text-xl font-bold tabular-nums text-zinc-900">
            {loading ? "—" : filteredPhotos.length}
            <span className="ml-1 text-sm font-normal text-zinc-400">
              / {photos.length}
            </span>
          </p>
        </div>
      </div>

      <div className="mb-8 max-w-xl">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : filteredPhotos.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-white px-6 py-16 text-center">
          <p className="text-base font-semibold text-zinc-800">
            No photographers found
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Try a different name or clear your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(String(photo.id))}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
