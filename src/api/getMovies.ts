import axios from "axios";
import {APIMovieData, MovieDataKey, MoviePreviewData} from "../types";
import {BASE_URL, BASE_POST_USER_DATA} from "../host_backend";
import {getFormattedPreviewMovies} from "../utils";

interface MoviesGetParams {
  page?: number;
  size?: number;
  order?: MovieDataKey;
  direction?: "asc" | "desc";
}

async function getMovies(): Promise<MoviePreviewData[] | null> {
  const authToken = localStorage.getItem("planet_auth_token");

  if (authToken){
    const fetchedMovies: APIMovieData[] | undefined = await fetchMovies(authToken);
    if (fetchedMovies){
      const filteredMovies = getFormattedPreviewMovies(fetchedMovies);
      return filteredMovies as MoviePreviewData[];
    }
  }
  return null;
}


async function fetchMovies ( authToken: string, moviesGetParams?: MoviesGetParams): Promise<APIMovieData[]| undefined> {
  const url = `${BASE_URL}/movies`;
  const params = JSON.stringify({...BASE_POST_USER_DATA, ...moviesGetParams});
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
    console.error("Unable to get movies: ", error);
  }
}
export default getMovies;
