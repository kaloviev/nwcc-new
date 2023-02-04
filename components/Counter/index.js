import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Counter = ({max, number, inProduct,  onDecrease, onIncrease}) => {
    const [num, setNum] = useState(number || 1);
    const changeNumber = (type) => {
        let currentNum = num;
        let maxNum = max?max:100
        if(type === 'add'){
            if(currentNum >= maxNum){
                currentNum = maxNum;
            }else{
                currentNum += 1;
            }
            setNum(currentNum)
            onIncrease(currentNum)
        }else{
            if(currentNum <= 0){
                currentNum = 0;
            }else{
                currentNum -= 1;
            }
            setNum(currentNum);
            onDecrease(currentNum)
        }
    }

    const inputChange = (e) => {
        setNum(Number(e.target.value));
    }

    let buttonStyle = '', inputStyle='';
    if(inProduct){
        buttonStyle = 'text-26 font-ptsans h-40 max-w-[40px] w-full flex items-center justify-center cursor-pointer bg-black text-white';
        inputStyle = 'w-full max-w-full text-center text-18 font-kazimir outline-none border-none rounded-none leading-0 pt-4 h-[40px]';
    }else{
        buttonStyle = 'text-20 font-ptsans h-24 w-24 flex items-center justify-center cursor-pointer';
        inputStyle = 'w-[44px] text-center text-16 font-kazimir outline-none border-none rounded-none leading-0 pt-4 h-[30px]';
    }

    return(
        <div className='inline-flex w-full items-center'>
            <button onClick={()=>changeNumber("sub")} className={buttonStyle}> - </button>
            <input type="text" value={num} onChange={inputChange} className={inputStyle}/>
            <button onClick={()=>changeNumber("add")}  className={buttonStyle}> + </button>
        </div>
    )
}

Counter.propTypes = {
    inProduct: PropTypes.bool
}

Counter.defaultProps = {
    inProduct: false
}
export default Counter;
