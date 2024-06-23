'use client'
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as z from "zod";
import { RegisterSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./Register.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {useMutation} from "@tanstack/react-query";
import {ISignUpData} from "@/services/auth/auth.types";
import {authService} from "@/services/auth/auth.service";
import {useState} from "react";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});


const Register = () => {
    const [success, setSuccess] = useState<boolean>(false)

    const { mutate: mutateRegister, isPending } = useMutation({
        mutationKey: ['signUp'],
        mutationFn: (data: ISignUpData) => authService.signUp(data),
        onSuccess() {
            setSuccess(true)
        },
        onError(error) {
            console.log(error.message)
        },
    })

    const onSubmit: SubmitHandler<ISignUpData> = data => {
        mutateRegister(data)
    }

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        }
    })


    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__info}>
                <Controller render={({field}) => (
                    <input {...field} placeholder={"Имя пользователя"} className={styles.input}/>
                )} name={'username'} control={form.control} disabled={isPending}/>
                <Controller render={({field}) => (
                    <input {...field} placeholder={"E-mail"} type={"email"} className={styles.input}/>
                )} name={'email'} control={form.control} disabled={isPending}/>
                <Controller render={({field}) => (
                    <input {...field} placeholder={"Пароль"} type={"password"} className={styles.input}/>
                )} name={'password'} control={form.control} disabled={isPending}/>
                {success && <div className={styles.success}>Аккаунт создан успешно!</div>}
            </div>
            <button type={"submit"} disabled={isPending}
                    className={clsx(styles.login__btn, daysOne.className)}>СОЗДАТЬ
            </button>
        </form>
    );
};

export default Register;