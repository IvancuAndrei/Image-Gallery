import { ImageStatistics } from "../types/ImageStatistics";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = "g5mgouoMBvFFi2_J5xnUvuL9oUmYtaOw3XHpS-XIVsY";

export type StatisticsData = {
    downloads: number;
    views: number;
}

const fetchStatistics = async (idImage: string): Promise<StatisticsData> => {
    try {
        const response = await fetch(`${API_URL}/${idImage}/statistics?client_id=${API_KEY}`);
        const data:ImageStatistics = await response.json();

        const statistics: StatisticsData = {
            downloads: data.downloads.total,
            views: data.views.total,
        };
        return statistics;
    } catch (error) {
        console.error("Error fetching image statistics:", error);
        // Poți returna un obiect gol sau un set de valori implicite
        return { downloads: 0, views: 0};
    }
};

export default fetchStatistics;