import React from 'react';

const ProgressRangeDot = ({label,min,max,value}) => {
    const actValue =  max-value; // 10 - 8
    const difference = max-min; //10-6


    const percent = 100 -   (actValue / difference)*100;

    let showValue = true , isMin = false, isMax=false;
    if(min === value) {
        isMin = true;
        showValue = false;
    }
    if(max === value) {
        isMax=true;
        showValue = false;
    }



    return(
        <>
            {label && <div className='font-ptsans text-14 mb-14'>{label}</div>}
            <div className='relative'>
                <div className='w-full border-b border-dashed border-gray-80'></div>
                <div className={`border-b border-gray-80 absolute bottom-0 left-0`} style={{width:percent+'%'}}>
                    <div className={`bg-gray-80 h-[11px] w-[11px] rounded-full absolute -top-[5px] ${isMin?'-right-10':'right-0'}`}></div>
                     {showValue && <div className='absolute font-ptsans text-14 text-center absolute -right-[14px] top-0 mt-4  max-w-[40px] w-full'>{value}</div>}
                </div>

                <div className='font-ptsans text-14 flex items-center justify-between absolute left-0 right-0 top-0'>
                    <div>{min}</div>
                    <div>{max}</div>
                </div>
            </div>
        </>
    )
}
export default ProgressRangeDot;
