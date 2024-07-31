'use client'
import {useEffect, useRef, useState} from "react";
import {SOCKET_API_URL} from "@/constants";
import styles from './Carousel.module.css'
import Image from "next/image";

interface ItemInterface {
    photo: string
    color: string
}


function Carousel() {
    const ws = useRef(null)

    const [items, setItems] = useState<ItemInterface[]>([])

    useEffect(() => {
        // Создание WebSocket соединения при монтировании компонента
        ws.current = new WebSocket(`${SOCKET_API_URL}/drops`);

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data)
            setItems(data)
        };

        ws.current.onclose = () => {
            console.log('WebSocket закрыто');
        };

        ws.current.onerror = (error) => {
            console.error('Ошибка WebSocket:', error);
        };

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);


    return (
        !!items.length &&
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {
                    items.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.shadow} style={{background: item.color}}/>
                            <Image src={item.photo} alt={'Item'} width={100} height={100} className={styles.img}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Carousel;
