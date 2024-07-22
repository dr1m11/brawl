import {object, z} from "zod";

export const LoginSchema = object({
    email: z.string().min(1, 'Введите email').email({
        message: "Неверный формат email адреса"
    }),
    password: z.string().min(1, {
        message: "Введите пароль"
    })
})

export const RegisterSchema = object({
    username: z.string().min(6,{
        message: 'Минимальная длина имени пользователя 6 символов'
    }),
    email: z.string().min(1, 'Введите адрес электронной почты').email({
        message: "Неверный формат email адреса"
    }),
    password: z.string().min(6, {
        message: "Минимальная длина пароля 6 символов"
    }),
})

export const PaymentSchema = object({
    sum: z.number({message: 'Введите число'}),
    promo: z.string().nullable()
})