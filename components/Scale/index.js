import React from 'react';

const Scale = ({number}) => {
 
    return(
        <div className='mt-24'>
            <div className='relative border-b border-gray-80'>
                <div className='flex items-end justify-between'>
                    {[...Array(101)].map((num,i)=>{
                       
                        return (
                            <div className={`border-l border-gray-80  ${(i === number)?'pt-0':(i%5 === 0)?'pt-8': 'pt-4'}`} key={i}></div>
                        )
                    })}
                   
                </div>
                <div className={`absolute bottom-0 border-l border-gray-80  pt-18`} style={
                    {
                        left:`calc(${number}% - 1.5px)`,
                    }
                }></div>
                <div className={`absolute bottom-12 font-kazimir text-20 italic transform w-full max-w-[65px] flex items-center`} style={
                    {
                        left: number > 90?`calc(${number}% - 58px)`:number < 10?`calc(${number}% - 5px)` :`calc(${number}% - 32px)`
                      
                    }
                }>{number}/100</div>
            </div>
        </div>
    );
}

export default Scale;