'use client'
import {useEffect, useState, useTransition} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as z from "zod";
import { RegisterSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import styles from "./Register.module.css";
import clsx from "clsx";
import localFont from "next/font/local";
import {useMutation} from "@tanstack/react-query";
import authService, {IRegisterData} from '@/services/auth.service'
import {API_URL} from "@/constants";

const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});


const Register = () => {

    useEffect(() => {
        fetch(`${API_URL}/item/get-all-items`).then(response => response.json()).then(res => console.log(res))
    }, []);


    const { mutate: mutateRegister, isPending } = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: IRegisterData) => authService.register(data),
        onSuccess(data) {
            console.log(data)
        },
        onError(error) {
            console.log(error.message)
        },
    })

    const onSubmit: SubmitHandler<IRegisterData> = data => {
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
            </div>
            <button type={"submit"} disabled={isPending}
                    className={clsx(styles.login__btn, daysOne.className)}>ВОЙТИ
            </button>
        </form>
    );
};

export default Register;