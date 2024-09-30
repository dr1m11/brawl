import {ICase} from "@/services/case/case.types";

export interface CaseSectionProps {
    title?: string
    data: ICase[]
}

export interface CaseProps {
    image: any
    title: string
    desc?: string
    price: number
    width?: number
    height?: number
    imgStyles?: string
    id: number
    color?: string
}