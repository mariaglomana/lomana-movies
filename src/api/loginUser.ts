import axios from "axios";
import { User, APIResponse } from "../types";
import { BASE_URL, BASE_POST_USER_DATA } from "../host_backend";

async function loginUser(
  user: Omit<User, "id" | "first_name" | "last_name">,
): Promise<APIResponse | undefined> {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/users/login`,
      data: { ...BASE_POST_USER_DATA, ...user },
    });
    if (response?.status === 200) {
      return {
        success: true,
        data: response.data,
      };
    } else if (response?.status === 401) {
      return {
        success: false,
        error: "There is no account registered with this data.",
      };
    } else {
      return {
        success: false,
        error: "An error has occurred. Please, try again later.",
      };
    }
  } catch (error) {
    console.error("Unable to login user: ", error);
  }
}
export default loginUser;
