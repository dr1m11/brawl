'use client'
import OrangeButton from "@/components/ui/OrangeButton/OrangeButton";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useRouter} from "next/navigation";
import {handleSendLoginCode, validateLoginCode, withdrawService} from "@/services/withdraw/withdraw.service";
import {setError, setField, setIsEmailSend} from "@/lib/withdrawSlice/withdraw.slice";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";


const WithdrawButton = () => {
    const {emailValue, value, isEmailSend, isValidEmail, code} = useAppSelector(state => state.withdraw)
    const userId = useAppSelector(state => state.user.id)

    const dispatch = useAppDispatch()

    const queryClient = useQueryClient()

    return (
        <OrangeButton
            onClick={async () => {
                if (!isEmailSend) {
                    const response =  await handleSendLoginCode(emailValue, 'laser')
                    if (response.ok) {
                        dispatch(setError(null))
                        dispatch(setIsEmailSend(true))
                        dispatch(setField('Код подтверждения отправлен!'))
                    } else if (response.error === 'invalid_email_address') {
                        dispatch(setError('Вы указали неверный email!'))
                        dispatch(setField(''))
                    } else {
                        dispatch(setError('Произошла ошибка :('))
                        dispatch(setField(''))
                    }
                } else {
                    const SCresponse = await validateLoginCode(emailValue, code)

                    if (SCresponse.ok) {
                        const response = await withdrawService.withdraw({
                            user_id: userId,
                            code: +code,
                            account_email: emailValue,
                            amount: +value
                        })

                        if (response === 'OK!') {
                            dispatch(setError(null))
                            dispatch(setField('Заявка на вывод создана!'))
                            queryClient.invalidateQueries({
                                queryKey: ['user']
                            })
                        } else {
                            setError('Недостаточный баланс!')
                        }
                    } else {
                        dispatch(setError('Вы ввели неверный код'))
                        dispatch(setField(''))
                    }
                }
            }}
            disabled={isEmailSend ? ((code.length !== 6) || !value) : !isValidEmail}
        >
            {isEmailSend ? "Вывести" : "Отправить код"}
        </OrangeButton>
    );
};

export default WithdrawButton;