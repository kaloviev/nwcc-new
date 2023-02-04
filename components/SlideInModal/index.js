import React, { useEffect, useState } from 'react';

import CloseIcon from '../../assets/images/icon-close.svg' ;

import Image from 'next/image';

import PropTypes from 'prop-types';
const SlideInModal = ({children, direction, onClose, open}) => {
    const onModalClose = () => {
        onClose();
    }
    let slideModalFrom = '-translate-x-full';
    if(direction === 'right'){
        slideModalFrom = 'translate-x-full';
    }
    useEffect(()=>{
        if(open){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
    },[open])
    return(
        <div className={`fixed top-0 left-0 bottom-0 right-0 z-50 transition-all duration-300 ${open?'visible opacity-100':'invisible opacity-0'}`}>
            <div className='bg-black opacity-60 fixed top-0 bottom-0 right-0 left-0'></div>
            
            <div className={`fixed left-0 top-0 bottom-0  w-full  h-screen transform transition-all duration-300 ${open && direction === 'right'?'translate-x-0': (open && direction === 'left')?'translate-x-0':slideModalFrom} `}>
                <div className={`flex ${direction === 'right'?'flex-row':'flex-row-reverse'} justify-end h-full`}>
                    <div className='w-[40px] h-[40px] sticky top-0 bg-gray-80 cursor-pointer' onClick={()=>onModalClose()}><div className="p-4 absolute inset-0 flex items-center justify-center"><Image src={CloseIcon} alt="close" height={16} width={16} className="object-contain object-center"/></div></div>
                    <div className="w-full bg-white flex flex-col h-screen overflow-auto justify-between  max-w-[335px] p-18">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

SlideInModal.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']),
    open:PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.element
}

SlideInModal.defaultProps={
    direction: 'left',
    open:false,
    onClose:()=> null
}

export default SlideInModal;