import React, { useState } from  'react';
import PropTypes from 'prop-types';
const Input = ({label,type, name}) => {
    const [passwordShow, setPasswordShow] = useState(false);
    
    return(
        <div className='mb-20'>
            <label className='text-14 text-gray-80 font-ptsans mb-6 block'>{label}</label>
            <div className='relative'>
                <input type={passwordShow?'text':type} className='h-[40px] border border-gray-80 outline-none shadow-none w-full px-16 rounded-none' name={name}/>
                {type === 'password' && <button type="button" className='absolute top-10 right-10 appearance-none text-14 font-ptsans' onClick={()=>setPasswordShow(!passwordShow)}>{passwordShow?'Скрывать':'Показать'}</button>}
            </div>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string
};

Input.defaultProps = {
    type: 'text'
};

export default Input;