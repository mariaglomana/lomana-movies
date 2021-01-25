import axios from "axios";
import { APIMovieData, MoviesQueryParams } from "../types";
import { BASE_URL, BASE_POST_USER_DATA } from "../host_backend";

async function getMovieDetail(
  movie_id: string,
  moviesQueryParams?: MoviesQueryParams,
): Promise<APIMovieData | null> {
  const authToken = localStorage.getItem("planet_auth_token");

  if (authToken) {
    const movieDetail: APIMovieData | undefined = await fetchMovieDetail(
      authToken,
      movie_id,
      moviesQueryParams,
    );
    if (movieDetail) {
      return movieDetail as APIMovieData;
    }
  }
  return null;
}

async function fetchMovieDetail(
  authToken: string,
  movie_id: string,
  moviesQueryParams?: MoviesQueryParams,
): Promise<APIMovieData | undefined> {
  const url = `${BASE_URL}/movies/${movie_id}`;
  const params = JSON.stringify({
    ...BASE_POST_USER_DATA,
    ...moviesQueryParams,
  });
  const headers = { Authorization: `Bearer ${authToken}` };
  try {
    const response = await axios.get(url, {
      params,
      headers,
    });
    if (response?.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Unable to get movies: ", error);
  }
}
export default getMovieDetail;
