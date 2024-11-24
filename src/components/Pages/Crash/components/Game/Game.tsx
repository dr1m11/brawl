'use client'
import styles from "./Game.module.css";
import Rows from "../Rows/Rows";
import {memo, useEffect, useMemo, useRef} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import anime from 'animejs/lib/anime.es.js';
import useResize from "@/hooks/useResize";
import {useAppSelector} from "@/lib/hooks";
import CrashTimer from "@/components/Pages/Crash/components/timer/timer";
import {CrashMultiplier} from "@/components/Pages/Crash/components/multiplier/multiplier";
import {link} from './gameLink'

const Game = () => {

    const status = useAppSelector(state => state.crashStatus.status)

    const size = useResize()

    const screenWidth = useMemo(() => {
        if (size) {
            if (size < 1060 && size > 990) {
                return 1060 - size
            } else if (size < 990 && size > 900) {
                return 70
            } else if (size < 900 && size > 785) {
                return -140 + 900 - size
            } else if (size < 785) {
                return -140 + 870 - size
            }
        }
        return 0
    }, [size])

    const pathRef = useRef(null);
    const shadowPathRef = useRef(null);
    const charecterPathRef = useRef(null);

    const pathData = useMemo(() => {
        return {
            Pending: `M 0 266.39 Q ${0 - screenWidth} 266.39 ${0 - screenWidth} 280`,
            Running: `M 0 266.39 Q ${372 - screenWidth} 266.39 ${620 - screenWidth} 40`,
            Crashed: `M 0 266.39 Q ${800 - screenWidth} 266.39 ${1200 - screenWidth} -300`
        };
    }, [screenWidth])

    const shadowPathData = useMemo(() => {
        return {
            Pending: `M 0 266.39 Q ${0 - screenWidth} 266.39 ${0 - screenWidth} 280 L ${0 - screenWidth} 266.39 Z`,
            Running: `M 0 266.39 Q ${372 - screenWidth} 266.39 ${620 - screenWidth} 40 L ${620 - screenWidth} 266.39 Z`,
            Crashed: `M 0 266.39 Q ${800 - screenWidth} 266.39 ${1200 - screenWidth} -300 L ${1200 - screenWidth} 266.39 Z`
        };
    }, [screenWidth])

    const charecterPathData = useMemo(() => {
        return {
            Pending: `translate(${-70 - screenWidth}, 260) rotate(-25.9718 0.000000 15.631226)`,
            Running: `translate(${550 - screenWidth}, 20) rotate(-25.9718 0.000000 15.631226)`,
            Crashed: `translate(${1113 - screenWidth}, -256) rotate(-25.9718 0.000000 15.631226)`
        }
    }, [screenWidth])

        useEffect(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            pathRef.current.setAttribute('d', pathData[status]);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            shadowPathRef.current.setAttribute('d', shadowPathData[status]);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            charecterPathRef.current.setAttribute('transform', charecterPathData[status])
        }, [charecterPathData, pathData, screenWidth, shadowPathData, status]);

    useEffect(() => {
        // Добавляем префиксы для Safari
        anime({
            targets: pathRef.current,
            d: pathData[status] || pathData.Crashed,
            easing: 'linear',
            duration: 2000,
            begin: () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                pathRef.current.setAttribute('d', pathData[status]);
            },
            update: function () {
                // Принудительное обновление для Safari
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                pathRef.current.style.webkitTransform = 'translateZ(0)';
            }
        });

        anime({
            targets: shadowPathRef.current,
            d: shadowPathData[status] || shadowPathData.Pending,
            easing: 'linear',
            duration: 2000,
            begin: () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                shadowPathRef.current.setAttribute('d', shadowPathData[status]);
            },
            update: function () {
                // Принудительное обновление для Safari
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                shadowPathRef.current.style.webkitTransform = 'translateZ(0)'
            }
        });

        anime({
            targets: charecterPathRef.current,
            transform: charecterPathData[status] || charecterPathData.Crashed,
            easing: 'linear',
            duration: 2000,
            begin: () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                charecterPathRef.current.setAttribute('transform', charecterPathData[status]);
            },
        });
    }, [charecterPathData, pathData, shadowPathData, status]);

    return (
        <div className={'relative w-full h-full'}>
            <div className={styles.graph__game}>
                {/*<GameBg/>*/}
                <CrashMultiplier/>
                <Rows/>
                <div className={'absolute left-0 right-0 bottom-0 top-0'}>
                    <svg className={styles.graphic__svg}>
                        <defs>
                            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                                <stop
                                    stopColor={status !== 'Crashed' ? "#9d7aff" : '#ff0000'}
                                    stopOpacity=".33"
                                />
                                <stop offset="1.87" stopColor={status !== 'Crashed' ? "#9d7aff" : '#ff0000'}
                                      stopOpacity="0"/>
                            </linearGradient>
                            <linearGradient id="grad_stroke" x1="0" x2="1" y1="0" y2="1">
                                <stop offset=".687" stopColor={status !== 'Crashed' ? "#622BFC" : '#ff0000'}/>
                                <stop offset="0.1" stopColor="#5c24fc" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        <g>
                            <path
                                ref={pathRef}
                                fill="transparent"
                                stroke="url(#grad_stroke)"
                                className={styles.graph}
                            />
                            <path
                                fill="url(#grad)"
                                className={styles.graph}
                                ref={shadowPathRef}
                            />
                        </g>
                    </svg>
                </div>
                <div className={'absolute left-0 right-0 bottom-0 top-0 z-10'}>
                    <svg style={{width: "100%", height: '100%', zIndex: '100'}} fill="none"
                         xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                        <defs>
                            <pattern id="pattern_183_1990" patternContentUnits="objectBoundingBox" width="1.000000"
                                     height="1.000000">
                                <use xlinkHref="#image183_199_0"
                                     transform="matrix(0.001953,0,0,0.003449,0,-0.005298)"/>
                            </pattern>
                            <image id="image183_199_0" width="512.000000" height="293.000000"
                                   xlinkHref={link}/>
                        </defs>
                        <rect id="sticker 1" y="18.631226" width="83.000000" height="47.000000"
                              fill="url(#pattern_183_1990)"
                              fillOpacity="1.000000"
                              ref={charecterPathRef}
                        />
                    </svg>
                </div>
            </div>
            {status === 'Pending' && <CrashTimer/>}
        </div>
    );
};

export default memo(Game, () => true);