import {object, z} from "zod";

export const LoginSchema = object({
    email: z.string().email({
        message: "Введите адрес электронной почты"
    }),
    password: z.string().min(1, {
        message: "Введите пароль"
    })
})

export const RegisterSchema = object({
    username: z.string().min(6,{
        message: 'Введите имя пользователя'
    }),
    email: z.string().email({
        message: "Введите адрес электронной почты"
    }),
    password: z.string().min(6, {
        message: "Введите пароль"
    }),
})