import axios from "axios";
import { APIMovieData, MoviePreviewData } from "types";
import { BASE_URL } from "host_backend";
import { getFormattedPreviewMovies } from "utils";

async function getMovies(page: number): Promise<MoviePreviewData[] | null> {
  const authToken = window.sessionStorage.getItem("jwt_movies");

  if (!authToken) return null;

  const fetchedMovies: APIMovieData[] | undefined = await fetchMovies(
    authToken,
    page,
  );
  if (!fetchedMovies || !fetchedMovies.length) return null;

  const filteredMovies = getFormattedPreviewMovies(fetchedMovies);
  return filteredMovies as MoviePreviewData[];
}

async function fetchMovies(
  authToken: string,
  page: number,
): Promise<APIMovieData[] | undefined> {
  const url = `${BASE_URL}/movies?size=15&order=title&direction=asc&page=${page}`;
  const headers = { Authorization: `Bearer ${authToken}` };
  try {
    const response = await axios.get(url, {
      headers,
    });
    if (response?.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Unable to get movies: ", error);
  }
}
export default getMovies;
