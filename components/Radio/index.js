import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
const RadioComponent = ({name, children, id, isChecked, action, checkboxStyle}) => {
    return(
        <div className={`mb-20 relative`}>
            <input type={'radio'} name={name} id={id} checked={isChecked?true:false} className="h-0 w-0 absolute top-0 left-0 opacity-0" onChange={action}/>
            <label htmlFor={id} className='text-14 text-gray-80 font-ptsans mb-6 block relative pl-32 cursor-pointer'>
                <span className={`h-[20px] w-[20px] rounded-full border-2 border-gray-80 flex items-center justify-center absolute left-0 top-0${isChecked?'bg-gray-80':''} ${checkboxStyle}`}>
                    {isChecked && <span className='bg-gray-80 h-[12px] w-[12px] inline-block rounded-full'></span>}
                </span> 
                {children}
            </label>
        </div>
    )
}

RadioComponent.propTypes = {
    name: PropTypes.string,
    id:PropTypes.string,
    isChecked: PropTypes.bool,
    action: PropTypes.func,
    checkboxStyle: PropTypes.string
};

RadioComponent.defaultProps = {
    isChecked: false,
    action: () => null,
    checkboxStyle: ''
}

export default RadioComponent;
