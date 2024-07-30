import {axiosAuth} from "@/api/axios";
import {IUser} from "@/utils/types";

export const userService =  {
  async getUserById() {
      const response = await axiosAuth.get<IUser>(`/authenticated/user/user`)
      return response.data
  }
}