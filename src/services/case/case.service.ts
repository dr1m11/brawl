import {axiosClassic} from "@/api/axios";
import {getAccessToken} from "@/services/auth/auth.helper";
import {ICase, IGun, IInCase} from "@/services/case/case.types";

export const caseService = {
    async caseOpen() {
        const response = await axiosClassic.get<IGun>('/games/open?case_id=1', {
            headers: {
                "Authorization": `Bearer ${getAccessToken()}`
            }
        })
        return response.data
    },

    async getItems() {
        const response = await axiosClassic.get<IInCase>('case/get-case?id=1')
        return response.data
    },

    async getCases() {
        const response = await axiosClassic.get<ICase[]>('case/get-all-cases')
        return response.data
    }
}