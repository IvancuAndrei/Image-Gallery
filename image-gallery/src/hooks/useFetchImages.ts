import { UnsplashImage } from "../types/UnsplashImage";
import fetchStatistics from "./useFetchStatistics";
import fetchTags from "./useFetchTags";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = "g5mgouoMBvFFi2_J5xnUvuL9oUmYtaOw3XHpS-XIVsY";

export type ImageData = {
  id: string;
  description: string;
  url: string;
  tags: string[];
  name: string;
  likes: number;
  downloads: number;
  views: number;
};

const fetchImages = async (page: number, perPage: number): Promise<ImageData[]> => {
  try {
    const response = await fetch(
      `${API_URL}?client_id=${API_KEY}&page=${page}&per_page=${perPage}`
    );
    const data: UnsplashImage[] = await response.json();

    const savedStats = JSON.parse(localStorage.getItem("imageStats") || "{}");

    const images: ImageData[] = await Promise.all(
      data.map(async (image) => {
        const id = image.id;

        if (!savedStats[id]) {
          savedStats[id] = {
            tags: [],
            downloads: 0,
            views: 0,
            likes: 0,
          };

          // Obține tag-urile și statistici
          const [tags, stats] = await Promise.all([
            fetchTags(id),
            fetchStatistics(id),
          ]);

          // Stochează tag-urile și statistici în savedStats
          savedStats[id].tags = tags.slice(0, 3); // Limitează la 3 tag-uri
          savedStats[id].downloads = stats.downloads;
          savedStats[id].views = stats.views;
          savedStats[id].likes = image.likes;
        }

        // Returnează datele complete pentru imagine
        return {
          id,
          description: image.alt_description ?? "No description",
          url: image.urls.small,
          tags: savedStats[id].tags.length > 0 ? savedStats[id].tags : ["uncategorized"], // Asigură-te că avem minim un tag
          name: image.user.name,
          likes: savedStats[id].likes,
          downloads: savedStats[id].downloads,
          views: savedStats[id].views,
        };
      })
    );

    // Salvăm noile date în localStorage
    localStorage.setItem("imageStats", JSON.stringify(savedStats));

    return images;
  } catch (error) {
    console.error("Error fetching images", error);
    return [];
  }
};

export default fetchImages;
