'use client'
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import styles from './CheckPaymentModal.module.css'
import GreenButton from "@/components/GreenButton/GreenButton";
import {IoCloudUploadOutline} from "react-icons/io5";
import {Manrope} from "next/font/google";
import {useEffect, useState} from "react";
import {axiosAuth} from "@/api/axios";
import clsx from "clsx";
import {setIsCheckModalOpen} from "@/lib/paymentSlice/payment.slice";
import toast from "react-hot-toast";

const manrope = Manrope({subsets: ["latin"], weight: ["500", '600']});

export const CheckPaymentModal = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('Загрузите файл');
    const [isLoading, setIsLoading] = useState(false)

    const {isCheckModalOpen, value, promo} = useAppSelector(state => state.payment)

    const toasterSuccess = () => {
        toast.success('Заявка на оплату отправлена, ожидайте пополнения!', {
            position: 'bottom-left',
            style: {
                background: 'rgb(67,54,154)',
                color: 'rgb(157,154,170)',
            }
        })
    }

    const toasterError = () => {
        toast.error('Ошибка при создании заявки на оплату!', {
            position: 'bottom-left',
            style: {
                background: 'rgb(67,54,154)',
                color: 'rgb(157,154,170)',
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        setIsLoading(true)

        try {
            const response = await axiosAuth(`/authenticated/own-replenishment?amount=${value}&promo=${promo}`, {
                method: 'POST',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200) {
                dispatch(setIsCheckModalOpen(false));
                toasterSuccess()
            } else {
                setMessage('Ошибка при загрузке файла');
                toasterError()
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setMessage('Ошибка при загрузке файла');
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        if (file) setMessage('Файл готов к отправке')
    }, [file]);

    const dispatch = useAppDispatch()

    if (!isCheckModalOpen) return

    return (
        <div className={styles.root} onClick={event => {
            event.stopPropagation();
            dispatch(setIsCheckModalOpen(false))
        }}>
            <div className={styles.wrapper} onClick={event => event.stopPropagation()}>
                <div className={styles.input__wrapper}>
                    <IoCloudUploadOutline fontSize={'92px'} color={'rgba(67,54,154,0.3)'}/>
                    <h2 style={{
                        color: 'rgba(67,54,154,0.54)',
                        fontSize: '20px',
                        fontWeight: '600'
                    }} className={manrope.className}>Загрузите скриншот оплаты</h2>
                    <input
                        type={'file'}
                        className={styles.input}
                        onChange={(e) => setFile(e.target.files[0])}
                        accept="image/*"
                    />
                </div>
                <div className={styles.button__group}>
                    <p className={clsx(styles.status, manrope.className)}>{message}</p>
                    <GreenButton
                        style={{borderRadius: '10px'}}
                        onClick={handleSubmit}
                        disabled={!file || isLoading}
                    >
                        Я загрузил
                    </GreenButton>
                </div>
            </div>
        </div>
    );
}