import Image from 'next/image';
import React from 'react';
import HeroImageSm from '../../../assets/images/coffee-split-beans-sm.jpg';
import HeroImageLg from '../../../assets/images/coffee-split-beans-lg.jpg';
const HeroBg = () => {
    return(
        <div className='pb-40'>
            <div className="container">
             <Image
                src={HeroImageSm}
                
                loading="eager"
                className='w-full lg:hidden'
            
                />
                <Image
                src={HeroImageLg}
                
                loading="eager"
                className='w-full hidden lg:block'
            
                />
            </div>
        </div>
    )
}
export default HeroBg;