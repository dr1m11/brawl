import {object, z} from "zod";

export const LoginSchema = object({
    email: z.string().email({
        message: "Введите адрес электронной почты"
    }),
    password: z.string().min(1, {
        message: "Введите пароль"
    })
})