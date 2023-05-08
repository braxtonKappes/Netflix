import axios from "axios";

/* to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// EXAMPLE CALL
instance.get('/')

export default instance
