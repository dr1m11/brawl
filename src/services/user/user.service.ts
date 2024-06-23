import {UserID} from "@/services/user/user.types";
import {axiosClassic} from "@/api/axios";
import {IUser} from "@/utils/types";

export const userService =  {
  async getUserById() {
      const userId = localStorage.getItem('userId')
      const response = await axiosClassic.get<IUser>(`/user/user?id=${userId}`)

      return response.data
  }
}