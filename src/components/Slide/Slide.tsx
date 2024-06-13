import Banner from '@/../public/Home/Banner.png'
import GreenButton from "@/components/GreenButton/GreenButton";
import InfoComponent from "@/components/InfoComponent/InfoComponent";
import Image from "next/image";
import Charecter from '@/../public/Home/Charecters.svg'
const Slide = ({isActive}: {isActive: boolean}) => {
    // ${!isActive && 'scale-75'}
    return (
        <div className={`relative ${isActive ? 'max-w-[1200px]' : 'max-w-[800px] mt-7'} mx-auto`} style={{transition: 'all 0.3s ease-in'}}>
            <div className={`w-full h-[77%] bottom-0 rounded-xl absolute bg-black ${isActive ? 'opacity-0' : 'opacity-30'} transition-all`}/>
            <Image src={Banner} alt={"Banner"} width={1200} height={479}
                   className={`absolute -bottom-0 -z-10`}/>
            <Image src={Charecter} alt={"Charecters"} width={910} height={534}
                   className={`mx-auto ${!isActive && 'scale-75'}`} style={{transition: 'all 0.3s ease'}} priority={true} loading={'eager'}/>
            <div
                className={'absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[rgba(17,17,17,1)] to-[rgba(8,8,8,0)] pb-10 flex items-end px-10 rounded-b-2xl'}>
                <div className={'flex items-center justify-between w-full text-[16px]'}>
                    <GreenButton>СМОТРЕТЬ</GreenButton>
                    <h2 className={'text-white font-bold'}>КЕЙСЫ ЛЕТНЕГО ПРОТИВОСТОЯНИЯ</h2>
                    <InfoComponent firstWord={'20 дней'} secondWord={'до окончания'}
                                   stylesFirstWord={'text-green-500 text-[13px]'}
                                   stylesSecondWord={'text-[13px] text-white'}/>
                </div>
            </div>
        </div>
    );
};

export default Slide;