'use client'
import styles from './Login.module.css'
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as z from "zod";
import {LoginSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import localFont from "next/font/local";
import clsx from "clsx";
import {useMutation} from "@tanstack/react-query";
import {authService} from "@/services/auth/auth.service";
import {ISignInData} from "@/services/auth/auth.types";
import {saveTokenStorage} from "@/services/auth/auth.helper";
import { BiError } from "react-icons/bi";
import {errorAdapter} from "@/utils/errorAdapter";


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
            console.log(form.setError('email', {type: 'server', message: 'Неверно введен email или пароль'}))
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
                {errorAdapter(form.formState.errors)&& Object.entries(form.formState.touchedFields).length && <div className={styles.error}><BiError className={styles.error__icon}/><span className={styles.error__message}>{errorAdapter(form.formState.errors)[0]}</span></div>}
                <button className={styles.reset__password}>Забыли пароль?</button>
            </div>
            <div className={styles.divider}/>
            <button type={"submit"} disabled={isPending}
                    className={clsx(styles.login__btn, daysOne.className)}>ВОЙТИ
            </button>
        </form>
    );
};

export default Login;