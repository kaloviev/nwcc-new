import React, { useEffect, useState } from 'react';

const Accordion = ({children, title, headerStyle, bodyStyle}) => {
    const [isActive, setIsActive] = useState(false);

    return(
        <div className='border-b border-gray-40 border-x-0'>
            <AccordionTitle active={isActive} setActive={setIsActive}>{title}</AccordionTitle>
            <AccordionBody active={isActive}>
                {children}
            </AccordionBody>    
        </div>
    )
}

const AccordionTitle = ({children, style, active, setActive})=>{
    let addIcon = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0V14H7.5V0H6.5ZM14 6.5L2.18557e-08 6.5L-2.18557e-08 7.5L14 7.5V6.5Z" fill="#515151"/>
        </svg>
    )

    let subIcon = (
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6.87842L2.18557e-08 6.87842L-2.18557e-08 7.87842L14 7.87842V6.87842Z" fill="#515151"/>
        </svg>
    )
    return (
        <div className='pr-32 py-8 pl-24 relative font-ptsans text-14'>
            {children}
            <button type='button' className='absolute right-10 top-12 appearance-none' onClick={()=>setActive(!active)}>{active?subIcon:addIcon}</button>
        </div>
    )
}

const AccordionBody = ({children, active})=>{
    let bodyOpenCloseStyle = 'max-h-0 overflow-hidden';
    if(active){
        bodyOpenCloseStyle = 'max-h-[5000px] overflow-auto'
    }
    return (
        <div className={`transition-all duration-300 ease-in-out  px-24 ${bodyOpenCloseStyle}`}>
            {children}
        </div>
    )
}

export default Accordion;