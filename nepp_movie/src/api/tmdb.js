import axios from "axios";

export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
  },
});

//tmdbAxios.get("trending/tv/week")
//  => https://api.themoviedb.org/3/movie/550?api_key=61f8702a9e183e13c12974877295e8e1
