import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import fetchImages from "../hooks/useFetchImages";
import { ImageData } from "../hooks/useFetchImages";
import SearchBar from "../components/SearchBar";

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let debounceTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(debounceTimeout);

      debounceTimeout = setTimeout(() => {
        if (
          window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 100 &&
          !loading
        ) {
          setLoading(true);
          setPage((prevPage) => prevPage + 2);
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimeout);
    };
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    fetchImages(page, 12)
      .then((data) => setImages((prevImages) => [...prevImages, ...data]))
      .catch((error) => console.error("Error fetching images", error))
      .finally(() => setLoading(false));
  }, [page]);

  // Filtrare după searchTerm
  const filteredImages = images.filter((image) => {
    if (!searchTerm) return true; // Afișează toate imaginile dacă searchTerm este gol

    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
      image.description?.toLowerCase().includes(lowerSearchTerm) ||
      image.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm))
    );
  });

  return (
    <div className="flex flex-col items-center pb-40 pt-4">
      <SearchBar onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {filteredImages.map((image) => (
          <ImageCard key={image.id} {...image} />
        ))}
        {loading && <p>Loading...</p>}
        {!loading && filteredImages.length === 0 && <p>No images found</p>}
      </div>
    </div>
  );
};

export default GalleryPage;
