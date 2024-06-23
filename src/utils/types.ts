export interface IUser {
    id: string
    username: string
    email: string
    is_active: boolean
    balance: number
    items: object[] | null
}