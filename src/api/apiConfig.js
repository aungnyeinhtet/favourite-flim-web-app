const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "12ada11a8980c60c58a48017e02f8fc8",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
