import axios from "axios";
import { APIResponse } from "../types";
import { BASE_URL } from "../host_backend";


async function registerRate (movie_id: string, score: number): Promise<APIResponse| undefined> {
  const authToken = localStorage.getItem("planet_auth_token");
  if (!authToken){
    return undefined;
  }
  const url = `${BASE_URL}movies/${movie_id}/rate`;
  const params = { score };
  const headers = { "Authorization": `Bearer ${authToken}` };

  try {
    const response = await axios.post(url, params, {headers});
    console.log("response", response);
    if (response?.status === 200) {
      return {
        success: true,
      };
    } else if (response?.status === 404) {
      return {
        success: false,
        error: "The movie provided can not be found.",
      };
    } else if (response?.status === 422) {
      return {
        success: false,
        error: "The rating process could not finish successfully. Please, try again later.",
      };
    } else {
      return {
        success: false,
        error: "An error has occurred. Please, try again later."
      };
    }
  } catch (error) {
    console.error(`Unable to register new rate for film ${movie_id}:` , error);
  }
}

export default registerRate;
