import { UnsplashImage } from "../types/unsplash";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = "g5mgouoMBvFFi2_J5xnUvuL9oUmYtaOw3XHpS-XIVsY";

export type ImageData = {
  id: string;
  description: string;
  url: string;
  tags: string[];
  name: string;
};

const fetchImages = async (page: number = 1, perPage: number = 15): Promise<ImageData[]> => {
  try {
    const response = await fetch(
      `${API_URL}?client_id=${API_KEY}&page=${page}&per_page=${perPage}`
    );
    const data: UnsplashImage[] = await response.json();

    const keywordTags = [
      "nature", "forest", "sky", "people", "city", "car", "man", "woman", "child",
      "dog", "cat", "food", "coffee", "music", "dance", "sport", "travel", "mountain",
      "beach", "sea", "ocean", "river", "lake", "flower", "tree", "house", "building",
      "architecture", "art", "book", "computer", "phone", "garden", "park", "school",
      "university", "hospital", "police", "firefighter", "doctor", "nurse", "teacher",
      "student", "engineer", "artist", "musician", "actor", "writer", "photographer",
      "designer", "developer", "programmer", "scientist", "astronaut", "pilot",
      "soldier", "king", "queen", "prince", "princess", "wizard", "witch", "vampire",
      "zombie", "ghost", "monster", "alien", "robot"
    ];

    const images: ImageData[] = data.map((image) => {
      let tags = Object.keys(image.topic_submissions).slice(0, 3); 

      if (tags.length === 0 && image.alt_description) {
        const generatedTags = keywordTags.filter((keyword) =>
          image.alt_description?.toLowerCase().includes(keyword)
        );
        tags = generatedTags.slice(0, 3); 
      }

      return {
        id: image.id,
        description: image.alt_description ?? "No description",
        url: image.urls.small,
        tags: tags.length > 0 ? tags : ["uncategorized"], // Asigurăm minim un tag
        name: image.user.name,
      };
    });

    return images;
  } catch (error) {
    console.error("Error fetching images", error);
    return [];
  }
};

export default fetchImages;
