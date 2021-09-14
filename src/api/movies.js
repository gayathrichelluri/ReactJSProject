import axios from 'axios';

const baseUrl = '/api/v1/';

export const getMovies = async ({path}) => {
    try {
        const response = await axios.get(`${baseUrl}${path}`);
        const params = new URLSearchParams({
            limit: response.data.total_count,
            page: 1
        });
        const {data: {movies}} = await axios.get(`${baseUrl}${path}?${params}`)
        return movies;
    } catch(e) {
        console.log(e);
        throw e;
    }
}