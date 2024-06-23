"use server"
import * as z from 'zod'
import {LoginSchema} from "@/schemas";
import {API_URL} from "@/constants";
import {cookies} from "next/headers";


interface ILoginResponse {
    token: string
}

export const login = async (values: z.infer<typeof LoginSchema>)=> {
    const validatesFields = LoginSchema.safeParse(values)

    if (!validatesFields.success)
        return {error: "Неверные данные"}

    const response = await fetch(`${API_URL}/auth/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatesFields)
    })

    if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса')
    }

    const responseData: ILoginResponse = await response.json()

    cookies().set('token', responseData.token)

    return cookies().get('token')
}