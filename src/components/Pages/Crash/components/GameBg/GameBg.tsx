'use client'
import React, {useEffect, useState} from 'react';
import styles from "./GameBg.module.css";

const GameBg = () => {
    const arr = [
        0,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
    ]

    const [left, setLeft] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [duration, setDuration] = useState(300)

    useEffect(() => {
        setTimeout(() => {
            setLeft(1)
        }, 100)
    }, [toggle]);

    return (
        <div className={styles.bg} style={{left: left ? '-10000px' : '0', transitionDuration: `${duration}s`}} onTransitionEnd={() => {
            setDuration(0)
            setLeft(0)
            setToggle(!toggle)
        }}>
            {
                arr.map((item, index) => {
                    return (
                        <img
                            src={'https://lucky-jet.gamedev-atech.cc/assets/media/86e9cddf78b8061081ecdae04d9d15e9.svg'}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
};

export default GameBg;