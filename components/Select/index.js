import Image from 'next/image';
import React from 'react';
import CaretDownIcon from '../../assets/images/icon-caret-down.svg';
const Select = ({label, name, options, selected , action, className, wrapperClass}) => {
    return(
        <div className={`mb-20  ${wrapperClass}`}>
            {label && <label className='text-14 text-gray-80 font-ptsans mb-6 block'>{label}</label>}
            <div className='relative'>
                <select name={name} className="h-[40px] border border-gray-80 outline-none shadow-none w-full px-16 text-14 rounded-none px-16 appearance-none w-full overflow-ellipsis pr-18 sm:pr-32" id="select-picker">
                    {options.length > 0 && options.map((option,i)=>{
                        return(
                            <option key={i}>{option.value}</option>
                        )
                    })}
                   
                </select>
                <label htmlFor='select-picker' className='absolute top-18 right-10 sm:top-16'>
                    <Image src={CaretDownIcon} alt="Caret Down" className='w-10 sm:w-[16px]'/>
                </label>
            </div>
        </div>
    )
}



export default Select;