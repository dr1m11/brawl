export interface IGun {
    id: number
    name: string
    rarity: number
    price: number
}

export interface ICase {
    id: number
    name: string
    price: number
    items: IGun[]
}