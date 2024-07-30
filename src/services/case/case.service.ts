import {axiosAuth, axiosClassic} from "@/api/axios";
import {getAccessToken} from "@/services/auth/auth.helper";
import {CaseOpenInterface, ICase, IGun, IInCase} from "@/services/case/case.types";

export const caseService = {
    async caseOpen(id) {
        const response = await axiosAuth.get<CaseOpenInterface>(`/authenticated/open-case?case_id=${id}`)
        return response.data
    },

    async getItems(id) {
        const response = await axiosClassic.get<IInCase>(`case/get-case?id=${id}`)
        return response.data
    },

    async getCases() {
        const response = await axiosClassic.get<ICase[]>('case/get-all-cases')
        return response.data
    }
}