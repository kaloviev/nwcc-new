import React, { useState } from 'react';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconMinus from '../../../assets/images/icon-minus.svg';

import ProductImage1 from '../../../assets/images/cart-item-1.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../Button';

const TableRow = ({data}) => {
    const [active, setActive] = useState(false);
    /*
    *   image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
    */

    let statusStyle='bg-[#E2E2E2]';
    if(data.status === 'доставлен'){
        statusStyle = 'bg-[#88EDB2]';
    }else if(data.status === 'отложен'){
        statusStyle = 'bg-[#FBC55C]'
    }else{
        statusStyle='bg-[#E2E2E2]';
    }
    return(
        <div className=''>
            <div className='border-gray-80 border-b py-8 lg:py-16'>
                {/* mobile */}
                <div className='flex flex-wrap text-12 lg:text-14 font-ptsans relative lg:hidden'>
                    <div className='absolute left-0 top-0 pt-4 cursor-pointer h-12 w-12 lg:h-20 lg:w-20 flex items-center justify-center' onClick={()=>setActive(!active)}>
                        {!active && <Image src={IconPlus} alt="Plus"/>}
                        {active && <Image src={IconMinus} alt="Minus"/>}
                    </div>
                    <div className='w-6/12   pl-24 '>{data.orderNo}</div>
                    <div className='w-3/12'>{data.date}</div>
                    <div className='w-3/12 text-right'>
                        <div className={`${statusStyle} inline-block px-6 py-2`}>{data.status}</div>
                    </div>
                    <div className='w-6/12   pl-24'>{data.delivery}{data.address && <span className='block hidden lg:block'>{data.address}</span>}</div>
                    <div className='w-3/12'>{data.goods}</div>
                    <div className='w-3/12 text-right'>{data.price}</div>
                </div>
                {/* desktop */}
                <div className='text-12  lg:text-14 lg:pb-10 font-ptsans relative hidden lg:flex '>
                    <div className='absolute left-0 top-0 pt-4 cursor-pointer h-12 w-12 flex items-center justify-center' onClick={()=>setActive(!active)}>
                        {!active && <Image src={IconPlus} alt="Plus"/>}
                        {active && <Image src={IconMinus} alt="Minus"/>}
                    </div>
                    <div className='w-6/12   pl-32 pr-14 lg:w-[14%]'>{data.orderNo}</div>
                    <div className='w-3/12 lg:w-[11.60%]'>{data.date}</div>
                    <div className='w-3/12 text-right  lg:text-left lg:w-[11.60%]'>
                        <div className={`${statusStyle} inline-block px-6 py-2`}>{data.status}</div>
                    </div>
                    <div className='w-6/12  lg:w-[35.74%]'>{data.delivery}{data.address && <span className='block hidden lg:block'>{data.address}</span>}</div>
                    <div className='w-3/12 lg:w-[12.96%]'>{data.goods}</div>
                    <div className='w-3/12 text-right  lg:text-left lg:w-[6.14%] lg:ml-0'>{data.price}</div>
                    <div className='lg:w-[8%]'>
                        {data.hasRepeat && <Button style={'w-full px-12 text-12'} variant="primary">Повторить</Button>}
                    </div>
                </div>
                <div className={`w-full pl-24 py-6 text-12 font-ptsans ${active?'block':'hidden'}`}>
                    {data.address && <div className='text-12 font-ptsans pb-12 lg:hidden'>{data.address}</div>}
                    {
                        data.products.map((product,i)=>{
                            return(
                                <div className='flex items-center border-t border-gray-80 py-8' key={i}>
                                    <div className={`${!product.available?'lg:opacity-50':''}`}>
                                        <Link href="">
                                            <Image src={product.image} height={70} width={70} alt={product.title} className='w-[70px] h-[70px]'/>
                                        </Link>
                                     </div>
                                    <div className='lg:flex items-center w-full'>
                                        <div className={`text-14 lg:text-18 font-kazimir italic lg:leading-0 lg:w-[24.5%] lg:pl-20 ${!product.available?'lg:opacity-50':''}`} >{product.title}</div>
                                        <div className='text-14 hidden lg:block  lg:w-[15%]'>{!product.available && <span className='text-red'>нет в наличии</span>}</div>
                                        <div className='text-12 lg:text-14 font-ptsans lg:hidden'>{product.weight} x {product.quantity}</div>
                                        <div className='text-12  lg:text-14  font-ptsans lg:hidden'>{product.type}</div>
                                        <div className={`hidden  lg:text-14 font-ptsans lg:block ${!product.available?'lg:opacity-50':''}`}>{product.weight}, {product.type}</div> 
                                        <div className={`hidden lg:text-14 font-ptsans lg:block lg:ml-auto lg:w-[17%] ${!product.available?'lg:opacity-50':''}`}>x {product.quantity}</div>
                                    </div>
                                    <div className={`ml-auto text-12 lg:text-14 font-ptsans  text-right lg:text-left w-[150px] lg:w-[18%] ${!product.available?'lg:opacity-50':''}`}>
                                        {product.price} ₽
                                    </div>
                                </div>
                            )
                        })
                    }
                    

                    {data.hasRepeat && <Button style={'w-full mt-12 lg:hidden'} variant="primary">Повторить</Button>}
                </div>
            </div>

          
        </div>
    )
}

export default TableRow;