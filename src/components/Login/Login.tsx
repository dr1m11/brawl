'use client'
import styles from './Login.module.css'
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as z from "zod";
import {LoginSchema, RegisterSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import localFont from "next/font/local";
import clsx from "clsx";
import {useMutation} from "@tanstack/react-query";
import {authService} from "@/services/auth/auth.service";
import {ISignInData} from "@/services/auth/auth.types";
import {getAccessToken, removeFromStorage, saveTokenStorage} from "@/services/auth/auth.helper";


const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});
const Login = () => {

    const { mutate: mutateLogin, isPending } = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: ISignInData) => authService.signIn(data),
        onSuccess({data}) {
            saveTokenStorage(data.token)
            localStorage.setItem('userId', data.user.id)
            location.reload()
        },
        onError(error) {
            console.log(error.message)
        },
    })

    const onSubmit: SubmitHandler<ISignInData> = data => {
        mutateLogin(data)
    }

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

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