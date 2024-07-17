export interface IGun {
    id: number
    name: string
    rarity: number
    price: number
    user_item_id?: number
}

export interface IInCase {
    id: number
    name: string
    price: number
    items: IGun[]
}

export interface ICase {
    id: number
    name: string
    price: number
}