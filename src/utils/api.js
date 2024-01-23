import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTY4NDMxNWNkOTNhMmIyMTE0NGEzZGIyZDk3NjE2MiIsInN1YiI6IjY1YTBjNjk3ZjVjYjIxMDEyY2IxY2YyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c4sQuaQe0su7JcmGoZkse-408yAljiZHBEYCachqKdw";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

 export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
