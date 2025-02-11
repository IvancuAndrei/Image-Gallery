import { use, useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import fetchImages from "../hooks/useFetchImages";

const GalleryPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return images.map((image: string) => (
    <ImageCard key={image} imageURL={image} />
  ));
};

export default GalleryPage;
