const STORAGE_KEY = "celebrare-photo-gallery-favourites";

export function loadFavourites() {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);

    // Only accept an array of valid photo IDs.
    if (
      !Array.isArray(parsedValue) ||
      !parsedValue.every(
        (id) => typeof id === "string" || typeof id === "number",
      )
    ) {
      return [];
    }

    return [...new Set(parsedValue.map(String))];
  } catch {
    // Malformed JSON or inaccessible storage must not crash the app.
    return [];
  }
}

export function saveFavourites(favourites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  } catch {
    // The app remains usable if browser storage is unavailable.
  }
}
