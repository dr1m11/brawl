'use client'
import styles from './Login.module.css'
import {Controller, useForm} from "react-hook-form";
import * as z from "zod";
import {LoginSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import localFont from "next/font/local";
import clsx from "clsx";
import {useState, useTransition} from "react";
import {login} from "@/actions/login";


const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});
const Login = () => {

    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()


    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")

        startTransition(() => {
            login(values).then(data => {
                setError(data?.error)
                setSuccess(data?.success)
                console.log({success: data.success, error: data.error, ...values})
            })
        })
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__info}>
                <Controller render={({field}) => (
                    <input {...field} placeholder={"E-mail"} type={"email"} className={styles.input}/>
                )} name={'email'} control={form.control} disabled={isPending}/>
                <Controller render={({field}) => (
                    <input {...field} placeholder={"Пароль"} type={"password"} className={styles.input}/>
                )} name={'password'} control={form.control} disabled={isPending}/>
                <button className={styles.reset__password}>Забыли пароль?</button>
            </div>
            <button type={"submit"} disabled={isPending}
                    className={clsx(styles.login__btn, daysOne.className)}>ВОЙТИ
            </button>
        </form>
    );
};

export default Login;