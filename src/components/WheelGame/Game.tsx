'use client'
import styles from './Game.module.css'
import WheelItem from "@/components/ui/WheelItem/WheelItem";
import {useState} from "react";


const fillArray = () => {
    let array: number[] = []
    for (let i = 0; i <= 345; i+=15) {
        array.push(i)
    }
    (array.length)
    return array
}

let arr = fillArray()


const Game = () => {

    const [rotate, setRotate] = useState(0)

    console.log(arr.length)

    return (
        <div className={styles.container}>
            {
                arr.map((item, index) => (
                    <WheelItem rotate={item + rotate} key={index}/>
                ))
            }
            <div className={styles.circle}/>
        </div>
    );
};

export default Game;