import {axiosAuth} from "@/api/axios";

export const itemService = {
    sellItem: async (userId: string, itemId: number) => {
        const response = await axiosAuth.get(`/authenticated/user/sell-item?user_item_id=${itemId}`)

        return response.data
    }
}