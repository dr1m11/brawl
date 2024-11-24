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
import {errorAdapter} from "@/utils/errorAdapter";
import {BiError} from "react-icons/bi";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});

interface RegisterInterface {
    toLogin: () => void
}

const Register = ({toLogin}: RegisterInterface) => {
    const [success, setSuccess] = useState<boolean>(false)
    const [time, setTime] = useState(3)


    const { mutate: mutateRegister, isPending } = useMutation({
        mutationKey: ['signUp'],
        mutationFn: (data: ISignUpData) => authService.signUp(data),
        onSuccess() {
            setSuccess(true)
            setTimeout(() => {
                toLogin()
            }, 3000)
            setTimeout(() => {
                setTime(2)
            }, 1000)
            setTimeout(() => {
                setTime(1)
            }, 2000)
            setTimeout(() => {
                setTime(0)
            }, 3000)
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
                {errorAdapter(form.formState.errors) &&
                    Object.entries(form.formState.touchedFields).length &&
                    <div className={styles.error}><BiError className={styles.error__icon}/>
                         {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
                         {/*@ts-expect-error*/}
                        <span className={styles.error__message}>{errorAdapter(form.formState.errors)[0]}</span>
                    </div>}
                {
                    success &&
                    <div className={styles.success}>
                        <p>Аккаунт зарегистрирован</p>
                    </div>
                }
                {
                    !!success &&
                    <p>Вы будете перенаправлены на страницу входа через: {time}</p>
                }
            </div>
            <div className={styles.divider}/>
            <button type={"submit"} disabled={isPending || success}
                    className={clsx(styles.login__btn, daysOne.className)}>СОЗДАТЬ
            </button>
        </form>
    );
};

export default Register;