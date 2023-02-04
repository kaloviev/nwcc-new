import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, style, type, variant,action}) => {
   
    
    return(
        <button type={type} className={`block ${style} py-10 px-16 font-muller font-medium text-14 ${variant === 'default'?'text-white':variant==='danger'?'text-white bg-red':'bg-gray-0 text-black'} hover:opacity-90 transition-all duration-300`}
        style={{
            backgroundImage: variant === 'default'?`url(/images/background-pattern.jpg)`:'none'
        }} onClick={action}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    variant:PropTypes.string,
    action: PropTypes.func
};

Button.defaultProps = {
    type: 'button',
    variant: 'default',
    action: ()=> null
}


export default Button;