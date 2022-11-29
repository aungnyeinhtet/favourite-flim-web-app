import apiConfig from "./apiConfig";
import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  now_playing: "now_playing",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  getPeople: (params) => {
    const url = `${apiConfig.baseUrl}person/popular?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url, params);
  },
  personDetail: (id) => {
    const url = `${apiConfig.baseUrl}person/${id}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
  reviews: (id, params) => {
    const url = `${apiConfig.baseUrl}/movie/${id}/reviews?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url, params);
  },
  castList: (id) => {
    const url = `${apiConfig.baseUrl}person/${id}/movie_credits?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  getGenres: (cate) => {
    const url = "genre/" + category[cate] + `/list?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
  getTrending: () => {
    const url = `${apiConfig.baseUrl}/trending/all/day?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
};

export default tmdbApi;
