'use client'
import styles from './Login.module.css'
import {useAppSelector} from "@/lib/hooks";
import Image from "next/image";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {LoginSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import Diamond from '@/../public/Footer/Diamond.svg'
import Star from '@/../public/Footer/BigStar.svg'

const Login = () => {
    const isLoginOpen = useAppSelector((state) => state.default.isLoginOpen)

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        isLoginOpen &&
        <div className={styles.login}>
            <div className={styles.shadow}/>
            <div className={styles.login__wrapper}>
                <div className={styles.images}>
                    <Image src={Star} alt={'Star'} width={74} height={77}/>
                    <Image src={Diamond} alt={'Diamond'} width={17.1} height={19.6} />
                </div>
                <h1>Играй и побеждай!</h1>
                <form {...form} onSubmit={() => console.log('')}>

                </form>
                <button>Забыли пароль?</button>
            </div>
        </div>
    );
};

export default Login;