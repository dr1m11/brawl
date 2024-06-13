import styles from './Wheel.module.css';
import BG from '@/../public/Wheel/BG.svg'
import ProfileIcon from '@/../public/Wheel/ProfileIcon.svg'
import Arrow from '@/../public/Wheel/Arrow.svg'
import ProfileIconGrey from '@/../public/Wheel/ProfileIconGrey.svg'
import Image from "next/image";
import Player from "@/components/CrashPlayer/Player";
import clsx from "clsx";
import localFont from "next/font/local";
import {Manrope} from "next/font/google";
import Game from "@/components/WheelGame/Game";
import BetCounter from "@/components/BetCounter/BetCounter";


const daysOne = localFont({src: '../../Fonts/DaysOne-Regular.ttf'});
const manrope = Manrope({weight: ['400', '500', '600'], subsets: ['latin', 'cyrillic']})


const Wheel = () => {
    return (
        <div className={clsx(styles.root, manrope.className)}>
            <Image src={BG} alt={'Background'} width={1435} height={858} className={styles.bg}/>
            <div className={styles.wrapper}>
                <div className={styles.game}>
                    <div className={styles.game__label}>
                        <h1 className={clsx(styles.heading, daysOne.className)}>53,40 RUB</h1>
                        <span className={styles.heading__label}>в этом раунде</span>
                    </div>
                    <Game/>
                    <div className={styles.game__menu}>
                        <div className={styles.menu__left}>
                            <BetCounter />
                            <div className={styles.range__container}>
                                <input type={'range'} min={'0'} max={'1000'} step={'10'} value={'500'}
                                       className={styles.range}/>
                            </div>
                        </div>
                        <div className={styles.menu__center}>
                            <div className={styles.determiner}>
                                <Image src={Arrow} alt={'Arrow'} width={99} height={312} className={styles.arrow}/>
                                <div className={styles.circle}>
                                    <h3 className={styles.numbers}>40.4</h3>
                                    <span className={styles.numbers__label}>сделайте ставку</span>
                                </div>
                            </div>
                            <button className={styles.bet__btn}>
                                <h5 className={daysOne.className}>СТАВКА</h5>
                            </button>
                        </div>
                        <div className={styles.menu__right}>
                            <div className={styles.multiplier}>
                                <span className={styles.multiplier__label}>X2</span>
                            </div>
                            <div className={styles.multiplier}>
                                <span className={styles.multiplier__label}>X2</span>
                            </div>
                            <div className={styles.multiplier}>
                                <span className={styles.multiplier__label}>X2</span>
                            </div>
                            <div className={styles.multiplier}>
                                <span className={styles.multiplier__label}>X2</span>
                            </div>
                            <div className={styles.multiplier}>
                                <span className={styles.multiplier__label}>X2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.history}>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                    <div className={styles.history__item}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.column}>
                        <div className={clsx(styles.bet, styles.grey)}>
                            <span className={clsx(daysOne.className, styles.multiply__by)}>x2</span>
                            <div className={styles.players__count}>
                                <Image src={ProfileIconGrey} alt={'Profile'} width={13} height={13}
                                       className={styles.icon}/>
                                <span className={styles.counter} style={{color: 'rgb(178, 182, 189)'}}>1</span>
                            </div>
                        </div>
                        <div className={styles.players}>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={clsx(styles.bet, styles.red)}>
                            <span className={clsx(daysOne.className, styles.multiply__by)}>x2</span>
                            <div className={styles.players__count}>
                                <Image src={ProfileIcon} alt={'Profile'} width={13} height={13}
                                       className={styles.icon}/>
                                <span className={styles.counter}>1</span>
                            </div>
                        </div>
                        <div className={styles.players}>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={clsx(styles.bet, styles.purple)}>
                            <span className={clsx(daysOne.className, styles.multiply__by)}>x2</span>
                            <div className={styles.players__count}>
                                <Image src={ProfileIcon} alt={'Profile'} width={13} height={13}
                                       className={styles.icon}/>
                                <span className={styles.counter}>1</span>
                            </div>
                        </div>
                        <div className={styles.players}>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={clsx(styles.bet, styles.green)}>
                            <span className={clsx(daysOne.className, styles.multiply__by)}>x2</span>
                            <div className={styles.players__count}>
                                <Image src={ProfileIcon} alt={'Profile'} width={13} height={13}
                                       className={styles.icon}/>
                                <span className={styles.counter}>1</span>
                            </div>
                        </div>
                        <div className={styles.players}>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={clsx(styles.bet, styles.yellow)}>
                            <span className={clsx(daysOne.className, styles.multiply__by)}>x2</span>
                            <div className={styles.players__count}>
                                <Image src={ProfileIcon} alt={'Profile'} width={13} height={13}
                                       className={styles.icon}/>
                                <span className={styles.counter}>1</span>
                            </div>
                        </div>
                        <div className={styles.players}>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                            <Player hideMultiplier hideWon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wheel;