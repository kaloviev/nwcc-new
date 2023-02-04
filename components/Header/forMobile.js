import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ActionButtons from './actionButtons';
import HamburgerMenuIcon from '../../assets/images/menu.svg';
import SlideInMenu from './slideInMenu';
const ForMobile = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    return(
        <>
        <header className='py-6 lg:hidden'>
            <div className='container mx-auto'>
                <div className='py-6 flex items-center justify-between'>
                    <div className='flex items-center justify-start flex-1 cursor-pointer' onClick={()=>setMobileMenuActive(true)}>
                        <Image src={HamburgerMenuIcon} alt="menu"  height={14} width={14} className="mr-10 block -mt-4 w-[14px]"/>  
                        <span className='font-kazimir text-14 leading-none'>Меню</span>
                    </div>
                    {/* /.flex */}
                    <div className='flex-1 flex justify-center '>
                        <Link href="/" className="font-muller font-medium text-18">СЗКК</Link>
                    </div>
                    {/* /.flex */}

                    <div className='flex-1 flex  justify-end '>
                        <ActionButtons/>
                    </div>
                </div>
            </div>
        </header>
        <SlideInMenu open={mobileMenuActive} onClose={()=>setMobileMenuActive(false)}/>
        </>
    )
}
export default ForMobile;