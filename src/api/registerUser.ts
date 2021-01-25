import axios from "axios";
import { User, APIResponse } from "../types";
import { BASE_URL, BASE_POST_USER_DATA } from "../host_backend";

async function registerUser(
  user: Omit<User, "id">,
): Promise<APIResponse | undefined> {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/users`,
      data: { ...BASE_POST_USER_DATA, user },
    });
    if (response?.status === 201) {
      return {
        success: true,
        data: response.data,
      };
    } else if (response?.status === 422) {
      return {
        success: false,
        error: "This email has already been registered",
      };
    } else {
      return {
        success: false,
        error: "An error has occurred. Please, try again later.",
      };
    }
  } catch (error) {
    console.error("Unable to register new user: ", error);
  }
}

export default registerUser;
