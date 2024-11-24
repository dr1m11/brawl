import {axiosAuth, axiosClassic} from "@/api/axios";
import {CaseOpenInterface, ICase, ICollection, IInCase} from "@/services/case/case.types";


export const caseService = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async caseOpen(id) {
        const response = await axiosAuth.get<CaseOpenInterface>(`/authenticated/open-case?case_id=${id}`)
        return response.data
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
    for (const i of cases) {
        if (i.collection != null) {
            collections.add(i.collection)
        }
    }
    collections.forEach((collection) => {
        result.push({name: collection, data: cases.filter(Case => Case.collection === collection)})
    })
    return result
}