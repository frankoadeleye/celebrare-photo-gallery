import { useEffect, useState } from "react";

const PHOTOS_API_URL = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(PHOTOS_API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The photo service returned unexpected data.");
        }

        setPhotos(data);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }

        setError("We couldn't load the photos. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    // Cancel the request if the component unmounts.
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}
