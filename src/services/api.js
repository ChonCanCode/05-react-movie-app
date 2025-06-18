//Calling APIS
//API key
//Always a good pritce to create a separate file that contains all of your API calls.
//Two operatiosns: 1. searchign for movies 2. displaying today's popular movies

const API_KEY = "72d483354be474ba4514be91c1b61428";
const BASE_URL = "https://api.themoviedb.org/";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
