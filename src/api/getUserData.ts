import axios from "axios";
import { User } from "../types";
import { BASE_URL } from "../host_backend";

async function getUserData(): Promise<User | undefined> {
  const authToken = localStorage.getItem("planet_auth_token");

  const url = `${BASE_URL}/users/profile`;
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
export default getUserData;
