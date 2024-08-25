import React from 'react';
import Image from "next/image";
import PriceIconImg from './PriceIcon.png'
const PriceIcon = ({width, height}: {width?: number, height?: number}) => {
    return (
        <Image
            src={PriceIconImg}
            alt={'Price'}
            quality={100}
            width={width ? width : 50}
            height={height ? height : 50}
            style={{display: 'inline'}}
        />
    );
};

export default PriceIcon;
