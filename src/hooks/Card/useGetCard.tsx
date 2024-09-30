import {useQuery} from "@tanstack/react-query";
import {axiosClassic} from "@/api/axios";

interface ICardResponse {
    number: string
    name: string
    bank: string
}

export const useGetCard = () => {
    const {data} = useQuery({
        queryKey: ['get-card'],
        queryFn: () => axiosClassic.get<ICardResponse>('/card')
    })

    if (!data) return {number: '', bank: ''}

    return {
        number: data.data.number.replace(/\d{4}/g, '$& '),
        bank: data.data.bank
    }
}