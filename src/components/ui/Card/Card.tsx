'use client'
import styles from './Card.module.css'
import Chip from '@/../public/Payment/chip.png'
import Image from "next/image";
import {Pragati_Narrow} from "next/font/google";
import clsx from "clsx";
import Logo from '@/../public/Footer/Logo.png'
import {MdContentCopy} from "react-icons/md";
import {useCopyToClipboard} from "usehooks-ts";
import {useGetCard} from "@/hooks/Card/useGetCard";
import toast from "react-hot-toast";

const pragatiNarrow = Pragati_Narrow({subsets: ['latin'], weight: '400'})

export const Card = () => {
    const [_, copy] = useCopyToClipboard()

    const card = useGetCard()

    const handleCopy = async () => {
        await copy(card.number.replaceAll(' ', ''))
        toast.success('Номер карты скопирован', {position: 'bottom-left', style: {
                background: 'rgb(67,54,154)',
                color: 'rgb(157,154,170)',
            }})
    }

    return (
        <div className={styles.root}>
            <Image src={Chip} alt={'Chip'} width={50} height={35} style={{marginLeft: '10px'}} className={styles.chip}/>
            <Image src={Logo} alt={'Logo'} width={208} height={156} className={styles.logo}/>
            <div className={styles.content}>
                <p className={clsx(pragatiNarrow.className, styles.numbers)}>{card.number}</p>
                <MdContentCopy fontSize={'18px'} cursor={'pointer'} color={'rgba(132, 140, 236)'} onClick={handleCopy}
                               className={styles.copy}/>
            </div>
            <div className={styles.content}>
                <p className={clsx(pragatiNarrow.className, styles.numbers)}>{card.name}</p>
            </div>
        </div>
    )
}