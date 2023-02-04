import Link from 'next/link';
import { Router } from 'next/router';
import React from 'react';

const Breadcrumb = ({routes}) => {
    
    return(
        <div className='overflow-auto'>
            <ul className='flex items-center text-gray-60 font-ptsans text-14 mb-4 whitespace-nowrap'>
                {routes && routes.map((route,i)=>{
                    if((routes.length - 1) === i){
                        return(<li key={i}>
                            <a>{route.name}</a>
                        </li>)
                    }
                    return(
                        <li key={i} className="flex items-center whitespace-nowrap">
                            {route.url && <Link href={route.url} className="hover:underline">{route.name}</Link>}
                            {!route.url && <a>{route.name}</a>}
                            <span className='mx-4 block'>&gt;</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Breadcrumb;