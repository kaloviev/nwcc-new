import Image from 'next/image';
import React from 'react';
import checkIcon from '../../assets/images/icon-check-white.svg';
const CheckboxComponent = ({name, children, value, id, isChecked, action, checkboxStyle}) => {
    return(
        <div className='mb-20 relative'>
            <input type={'checkbox'} name={name} value={value} id={id} checked={isChecked?true:false} className="h-0 w-0 absolute top-0 left-0 opacity-0" onChange={action}/>
            <label htmlFor={id} className='text-14 text-gray-80 font-ptsans mb-6 block relative pl-32 cursor-pointer'>
                <span className={`h-[20px] w-[20px] rounded border border-gray-80 flex items-center justify-center absolute left-0 top-0 ${isChecked?'bg-gray-80':''} ${checkboxStyle}`}>
                   {isChecked && <Image src={checkIcon} alt="check" width={12} height={10} className="object-contain"/>}
                </span> 
                <span>
                {children}
                </span>
            </label>
        </div>
    )
}

export default CheckboxComponent;