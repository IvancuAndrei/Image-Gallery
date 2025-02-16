import { ImageTags } from "../types/ImageTags";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = "g5mgouoMBvFFi2_J5xnUvuL9oUmYtaOw3XHpS-XIVsY";

const fetchTags = async (imageId: string): Promise<string[]> => {
    try{
        const response = await fetch(
            `${API_URL}/${imageId}?client_id=${API_KEY}`);
        const data: ImageTags = await response.json();

        const tags = data.tags.map((tag) => tag.title);

        return tags;

    }catch(error){
        console.error(error);
        return [];
    }
    
}

export default fetchTags;