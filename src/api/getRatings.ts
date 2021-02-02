import axios from "axios";
import { Rating } from "../types";
import { BASE_URL } from "../host_backend";

async function getRatings(): Promise<Rating[] | undefined> {
  const authToken = window.sessionStorage.getItem("jwt_movies");

  const url = `${BASE_URL}ratings?size=30&order=score&direction=desc`;
  const headers = { Authorization: `Bearer ${authToken}` };
  try {
    const response = await axios.get(url, {
      headers,
    });

    if (response?.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response?.status === 401) {
      console.error(
        "Unable to get movies, Unauthorized: The user is not logged in: ",
        error,
      );
    } else {
      console.error("Unable to get movies: ", error);
    }
  }
}
export default getRatings;
