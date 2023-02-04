import React from  'react';

const Textarea = ({label, name, placeholder}) => {
    return(
        <div className='mb-20'>
            <label className='text-14 text-gray-80 font-ptsans mb-6 block'>{label}</label>
            <textarea className={`h-[146px] border border-gray-80 outline-none shadow-none w-full rounded-none placeholder:text-14 py-12 px-14`} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default Textarea;