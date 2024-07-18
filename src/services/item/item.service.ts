import {axiosClassic} from "@/api/axios";

export const itemService = {
    sellItem: async (userId: string, itemId: number) => {
        const response = await axiosClassic.get(`/user/sell-item?user_id=${userId}&user_item_id=${itemId}`)

        return response.data
    }
}