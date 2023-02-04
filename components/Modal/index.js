import Image from 'next/image';
import React, { useEffect } from  'react';
import CloseIcon from '../../assets/images/icon-close-black.svg';

const Modal = ({open,children, onClose}) => {
    useEffect(()=>{
        if(open){
            document.body.style.overflow="hidden"
        }else{
            document.body.style.overflow="auto"
        }
    },[open])
    return(
        <div className={`fixed inset-0 z-[999] transition-all duration-300 ${open?'visible opacity-100':'invisible opacity-0'}`}>
            <div className='bg-black absolute inset-0 opacity-50'></div>
            <div className={`absolute transition-all duration-300  ${open?' top-0 lg:top-40':'top-0 lg:top-10'} left-0 lg:left-16 right-0 lg:right-16`}>
                <div className='bg-white w-full p-16 py-32 lg:p-30 h-screen overflow-auto lg:max-w-[500px] lg:mx-auto lg:h-auto relative'>
                    <button className='absolute right-16 top-16' onClick={onClose}><Image src={CloseIcon} alt="Close" width={14}/></button>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal;