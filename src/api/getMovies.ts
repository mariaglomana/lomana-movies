import axios from "axios";
import {APIMovieData, MovieDataKey} from "../types";
import {BASE_URL, BASE_POST_USER_DATA} from "../host_backend";


interface MoviesGetParams {
  page?: number;
  size?: number;
  order?: MovieDataKey;
  direction?: "asc" | "desc";
}


async function getMovies ( authToken: string, moviesGetParams?: MoviesGetParams): Promise<APIMovieData[]| undefined> {
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
