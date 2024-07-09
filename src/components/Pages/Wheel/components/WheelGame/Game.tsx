'use client'
import styles from './Game.module.css'
import GreenItem from "@/../public/Wheel/GreenItem.svg";
import PurpItem from "@/../public/Wheel/PurpItem.svg";
import BlackItem from "@/../public/Wheel/Black.svg";
import RedItem from "@/../public/Wheel/Red.svg";
import OrangeItem from "@/../public/Wheel/OrangeItem.svg";
import {useEffect, useState} from "react";
import WheelItem from "@/components/ui/WheelItem/WheelItem";

let arr = [
    {
        color: OrangeItem,
        multiply: 100,
        position: 0
    },
    {
        color: GreenItem,
        multiply: 10,
        position: 15
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 30
    },
    {
        color: BlackItem,
        multiply: 2,
        position: 45
    },
    {
        color: GreenItem,
        multiply: 10,
        position: 60
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 75
    },
    {
        color: RedItem,
        multiply: 3,
        position: 90
    },
    {
        color: BlackItem,
        multiply: 2,
        position: 105
    },
    {
        color: OrangeItem,
        multiply: 100,
        position: 120
    },
    {
        color: BlackItem,
        multiply: 2,
        position: 135
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 150
    },
    {
        color: RedItem,
        multiply: 3,
        position: 165
    },
    {
        color: GreenItem,
        multiply: 10,
        // multiply: 10,
        position: 180
    },
    {
        color: BlackItem,
        multiply: 2,
        position: 195
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 210
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 225
    },
    {
        color: OrangeItem,
        multiply: 100,
        position: 240
    },
    {
        color: BlackItem,
        multiply: 2,
        position: 255
    },
    {
        color: GreenItem,
        multiply: 10,
        position: 270
    },
    {
        color: RedItem,
        multiply: 3,
        position: 285
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 300
    },
    {
        color: BlackItem,
        multiply: 2,
        position: 315
    },
    {
        color: PurpItem,
        multiply: 5,
        position: 330
    },
    {
        color: GreenItem,
        multiply: 10,
        position: 345
    },
]

function getRandomObjectByMultiply(array, multiplyValue) {
    // Фильтруем массив, чтобы найти все объекты с указанным значением multiply
    const filteredArray = array.filter(item => item.multiply === multiplyValue);

    // Если таких объектов нет, возвращаем null
    if (filteredArray.length === 0) {
        return null;
    }

    // Выбираем случайный индекс из отфильтрованного массива
    const randomIndex = Math.floor(Math.random() * filteredArray.length);

    // Возвращаем случайный объект
    return filteredArray[randomIndex].position;
}

interface GameInterface {
    cell: number
    pending: boolean
}

const Game = ({cell, pending}: GameInterface) => {

    const [rotate, setRotate] = useState(1080)

    useEffect(() => {
        if (pending) {
            setRotate(rotate - 1080)
        }
    }, [pending, cell]);

    useEffect(() => {
        if (!!cell) {
            setRotate(getRandomObjectByMultiply(arr, cell) + 1080)
        }
    }, [cell]);

    return (
        <div className={styles.container}>
            {
                arr.map((item, index) => (
                    <WheelItem rotate={item.position - rotate} key={index} multiply={item.multiply} image={item.color}
                               pending={pending}/>
                ))
            }
            <div className={styles.circle}/>
        </div>
    );
};

export default Game;