const API_URL = "https://api.unsplash.com/photos"
const API_KEY = "g5mgouoMBvFFi2_J5xnUvuL9oUmYtaOw3XHpS-XIVsY"

const fetchImages = async (page:number = 1, perPage: number = 10) => {
    try{
        const response = await fetch(`${API_URL}?client_id=${API_KEY}&page=${page}&per_page=${perPage}`)
        const data = await response.json()
        return data;
    }
    catch(error){
        console.error("Error fetching images", error)
        return [];
    }
}

export default fetchImages;