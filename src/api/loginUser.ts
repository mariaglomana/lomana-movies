import axios, { AxiosResponse } from "axios";
import { User } from "types";
import { BASE_URL, BASE_POST_USER_DATA } from "host_backend";

async function loginUser(
  user: Omit<User, "id" | "first_name" | "last_name">,
): Promise<AxiosResponse<any> | undefined> {
  return axios({
    method: "post",
    url: `${BASE_URL}/users/login`,
    data: { ...BASE_POST_USER_DATA, ...user },
  });
}
export default loginUser;
