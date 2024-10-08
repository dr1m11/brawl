export type EmailType = "laser" | 'scroll' | 'magic' | 'soil' | 'reef'

export interface IWithdrawData {
    user_id: string
    account_email: string
    position: string
    code: number
}