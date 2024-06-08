"use server"
import * as z from 'zod'
import {LoginSchema} from "@/schemas";


export const login = async (values: z.infer<typeof LoginSchema>)=> {
    const validatesFields = LoginSchema.safeParse(values)

    if (!validatesFields.success)
        return {error: "Неверные данные"}

    return {success: 'Данные верны'}

}