
import React from 'react';

const MethodCard = ({data}) => {
    return(
        <div className='bg-white p-20 pb-56  border border-gray-20 min-w-[360px]'>
            <h3 className='font-muller font-medium text-18 mb-10'>{data.title}</h3>
            <div className='text-16 font-ptsans'>
                {
                    data.description.map((desc,i)=>{
                        return(
                            <div className='flex' key={i}>
                                [not found]
                                {/* <div> - </div> */}
                                {/* <div className='' dangerouslySetInnerHTML={{__html: desc}} /> */}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default MethodCard;
