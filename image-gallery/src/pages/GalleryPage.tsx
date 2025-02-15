import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import fetchImages from "../hooks/useFetchImages";
import { ImageData } from "../hooks/useFetchImages";

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages();
        setImages(data); // Salvăm obiectele de tip ImagePreview
      } catch (error) {
        console.error("Error fetching images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <p>Loading...</p> // Afișezi un mesaj de încărcare
  ) : (
    <div className="grid grid-cols-5 gap-4 p-4 items-stretch bg-gray-100">
      {images.map((image) => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
};

export default GalleryPage;
