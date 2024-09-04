import React from 'react';
import Image from "next/image";
import PriceIconImg from './PriceIcon.png'
const PriceIcon = ({width, height}: {width?: number, height?: number}) => {
    return (
        <Image
            src={PriceIconImg}
            alt={'Price'}
            quality={100}
            width={width ? width : 20}
            height={height ? height : 20}
            style={{display: 'inline', marginLeft: '5px'}}
        />
    );
};

export default PriceIcon;
