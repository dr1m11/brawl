export interface IGun {
    id: number
    name: string
    rarity?: number
    price: number
    user_item_id?: number
    photo_link?: string
    color?: string
    sold?: boolean
}

export interface CaseOpenInterface {
    user_item_id: number
    wined_item: IGun
}

export interface IInCase {
    id: number
    name: string
    price: number
    photo_link?: string
    items: IGun[]
}

export interface ICase {
    id: number
    name: string
    price: number
    photo_link?: string
    color?: string
}