import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({percent}) => {

    return(
        <div className='relative'>
            <div className='w-full h-[1px] bg-gray-20'></div>
            <div className={`bg-gray-60 h-[3px] absolute -top-[1px] left-0 `} style={{width:percent+'%'}}></div>
        </div>
    )
}
ProgressBar.propTypes = {
    percent: PropTypes.number
};
ProgressBar.defaultProps = {
    percent: 0
};
export default ProgressBar;