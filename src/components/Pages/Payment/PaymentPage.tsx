'use client'
import styles from './PaymentPage.module.css'
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import {Manrope} from "next/font/google";
import RadioButton from "@/components/ui/RadioButton/RadioButton";
import localFont from "next/font/local";
import OrangeButton from "@/components/ui/OrangeButton/OrangeButton";
import Image from "next/image";
import FreeKassa from '@/../public/Payment/FreeKassa.png'
import {useAppSelector} from "@/lib/hooks";


const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin']})

const daysOne = localFont({src: '../../../Fonts/DaysOne-Regular.ttf'});

const PaymentPage = () => {
    const user = useAppSelector(state => state.user.id)
    const router = useRouter()

    const [paymentSelected, setPaymentSelected] = useState(false)
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: inputValue} = e.target;
        const numericValue = inputValue.replace(/[^0-9.,]/g, ''); // allow decimal points and commas
        const decimalParts = numericValue.split(/[.,]/);
        if (decimalParts.length > 1) {
            decimalParts[1] = decimalParts[1].slice(0, 2); // truncate to 2 digits
        }
        const newValue = decimalParts.join('.');
        setValue(newValue);
    };

    return (
        <div className={clsx(styles.root, manrope.className)}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Link href={'/profile'}>
                        <button className={clsx(styles.back__btn)}>Назад</button>
                    </Link>
                    <span className={styles.header__label}>Пополните баланс</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.content__left}>
                        <h2 className={styles.content__left__header}>Все доступные методы оплаты для вашего региона</h2>
                        <div className={styles.payment__methods}>
                            <div className={clsx(styles.payment__card, paymentSelected && styles.selected)} onClick={() => setPaymentSelected(true)}>
                                <Image src={FreeKassa} alt={'FreeKassa'} quality={100} width={73} height={73}/>
                            </div>
                        </div>
                        <p className={styles.annotation}>Для пополнения баланса вы будете перемещены на сайт платёжной
                            системы. Баланс пополняется
                            моментально, но, если этого не произошло в течение часа, напишите нам на почту <span
                                style={{color: 'white', cursor: 'pointer'}}>support</span>,
                            указав подробные данные платежа.</p>
                        <div className={styles.content__bottom}>
                            <RadioButton
                                outlineStyle={{
                                    background: 'rgb(33, 27, 62)',
                                    borderRadius: '10px',
                                }}
                                inlineStyle={{
                                    background: 'rgb(27, 191, 103)',
                                    maxWidth: "18px",
                                    maxHeight: "18px",
                                    borderRadius: '4px'
                                }}
                            />
                            <span className={styles.acception}>Я принимаю условия пользовательского соглашения</span>
                        </div>

                    </div>
                    <div className={styles.content__right}>
                        <div className={styles.selected__method}>
                            <h3 className={styles.selected__method__title}>Выбранный метод оплаты:</h3>
                            <h4 className={styles.selected__method__value}>CARD</h4>
                        </div>
                        <form className={styles.form}>
                            <div className={styles.input__container}>
                                <label className={styles.input__label}>Введите сумму RUB</label>
                                <input placeholder={"0.00 RUB"} className={styles.payment__input} value={value}
                                       onChange={handleChange}/>
                            </div>
                            <div className={styles.input__container}>
                                <label className={styles.input__label}>Введите промокод</label>
                                <input placeholder={"PROMO"} className={styles.payment__input}/>
                            </div>
                        </form>
                        <div className={styles.info}>
                            <h3 className={styles.info__label}>Сумма зачисления</h3>
                            <span className={clsx(styles.info__value, daysOne.className)}>{value ? value : 0} RUB</span>
                        </div>
                        <OrangeButton
                            onClick={async () => {
                                const response = await axios.post('https://api.youngrusssia.ru/replenishment', JSON.stringify({
                                    user_id: user,
                                    amount: +value
                                }))
                                const url = response.data
                                router.push(url)
                            }}
                            disabled={!value || !paymentSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;