import {axiosAuth, axiosClassic} from "@/api/axios";
import {getAccessToken} from "@/services/auth/auth.helper";
import {CaseOpenInterface, ICase, ICollection, IGun, IInCase} from "@/services/case/case.types";

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
        console.log(casesAdapter(response.data))
        return casesAdapter(response.data)
    }
}

const casesAdapter = (cases: ICase[]) => {
    const collections = new Set<string>()
    const result: ICollection[] = []
    for (let i of cases) {
        collections.add(i.collection)
    }
    collections.forEach((collection) => {
        result.push({name: collection, data: cases.filter(Case => Case.collection === collection)})
    })
    return result
}