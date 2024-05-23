import axios from 'axios';

const API_URL: string = String(import.meta.env.VITE_API_URL);
const API_KEY: string = String(import.meta.env.VITE_API_KEY);
/**
 * This class handles all the api calls to the movie database api
 */
class ApiClient {
    apiUrl: string;
    apiKey: string;

    constructor(apiUrl: string = API_URL, apiKey: string = API_KEY) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    // makes the api request
    private async request(endpoint: string, parameters: string) {
        const requestUrl: string = `${this.apiUrl}${endpoint}?api_key=${API_KEY}${parameters}`;
        try {
            const request = await axios.get(requestUrl);
            const response = request.data.results || request.data;
            return { data: response, error: null };
        }
        catch (error) {
            return { data: null, error: error };
        }
    }



    async getMovies(page: number, category: string, searchQuery = "") {
        let parameters: string = `&page=${page}`, endpoint = `/movie/${category}`;

        if (searchQuery) {
            endpoint = "/search/movie";
            parameters += `&query=${searchQuery}`;
        }

        return await this.request(endpoint, parameters);
    }

    async getMovieVideo(movieId: number) {
        return await this.request(`/movie/${movieId}/videos`, '');
    }


}

export default ApiClient;