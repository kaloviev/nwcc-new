import React from 'react';

const Tooltip = ({direction, className, children}) => {
    let toolTipContentStyle = 'border-gray-80 rounded-md p-12 ';
    let toolTopArrowStyle = ' ';
    if(direction === 'right'){
        toolTipContentStyle += ' left-[100%] top-[50%] transform -translate-y-[50%] ml-10'
        toolTopArrowStyle += ' -left-[5px] top-[50%] transform -translate-y-[50%]'
    }
    else if(direction === 'left'){
        toolTipContentStyle += ' right-[100%] top-[50%] transform -translate-y-[50%] mr-10'
        toolTopArrowStyle += ' -right-[5px] top-[50%] transform -translate-y-[50%]'
    }
    else if(direction === 'bottom'){
        toolTipContentStyle += ' top-[100%] left-[50%] transform -translate-x-[50%] mt-10'
        toolTopArrowStyle += ' left-0 right-0 -top-[5px] mx-auto'
    }else{
        toolTipContentStyle += ' bottom-[100%] left-[50%] transform -translate-x-[50%] mb-10'
        toolTopArrowStyle += ' left-0 right-0 -bottom-[5px] mx-auto'
    }
    return(
        <div className={`relative inline-block group ${className}`}>
            <div className='h-14 w-14 bg-gray-80 rounded-full flex items-center justify-center cursor-pointer'>
                <svg width="3" height="10" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.11916 1.092C3.11916 1.82 2.64316 2.198 1.97116 2.198C1.31316 2.198 0.837162 1.82 0.837162 1.092C0.725162 -0.364 3.21716 -0.364 3.11916 1.092ZM2.95137 3.31799V10.038H1.00537V3.31799H2.95137Z" fill="white"/>
                </svg>
            </div>

            <div className={`absolute bg-gray-80 z-10 text-white  text-14 min-w-[170px] transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 ${toolTipContentStyle}`}>
                <div className={`h-10 w-10 bg-gray-80 absolute transform rotate-45 ${toolTopArrowStyle}`}></div>
                {children}
            </div>
        </div>
    )
}

export default Tooltip;
