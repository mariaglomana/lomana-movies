import axios from "axios";
import {APIMovieData, MoviePreviewData, MoviesQueryParams} from "../types";
import {BASE_URL, BASE_POST_USER_DATA} from "../host_backend";
import {getFormattedPreviewMovies} from "../utils";

async function getUnratedRandomMovie( moviesQueryParams?: MoviesQueryParams): Promise<MoviePreviewData | null> {
  const authToken = localStorage.getItem("planet_auth_token");

  if (authToken){
    const fetchedMovie: APIMovieData| undefined = await fetchUnratedRandomMovie(authToken, moviesQueryParams);
    if (fetchedMovie){
      const filteredMovies = getFormattedPreviewMovies([fetchedMovie]);
      return filteredMovies[0] as MoviePreviewData;
    }
  }
  return null;
}

async function fetchUnratedRandomMovie ( authToken: string, moviesQueryParams?: MoviesQueryParams): Promise<APIMovieData| undefined> {
  const url = `${BASE_URL}/movies/random_unrated`;
  const params = JSON.stringify({...BASE_POST_USER_DATA, ...moviesQueryParams});
  const headers = { Authorization: `Bearer ${authToken}` };
  try {
    const response = await axios.get(url, {
      params,
      headers
    });
    if (response?.status === 200) {
      return response.data;
    } 
  } catch (error) {
    console.error("Unable to get unrated random movie: ", error);
  }
}
export default getUnratedRandomMovie;
