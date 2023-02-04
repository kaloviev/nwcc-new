import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import LogoIcon from '../../assets/images/logo.svg';

const Logo = ({withLogo, withName}) => {
    return(
        <div className='flex items-center'>
            {withLogo && <Image src={LogoIcon} alt="Logo" height="38" width="38" />}
            {withName && <div className="font-muller font-medium text-18 ml-10 leading-0">СЗКК</div>}
        </div>
    )
}

Logo.propTypes = {
    withLogo: PropTypes.bool,
    withName: PropTypes.bool
};
Logo.defaultProps = {
    withLogo: true,
    withName: true
};
export default Logo;