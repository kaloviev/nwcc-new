import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import ProgressBar from '../ProgressBar';
// import Select from '../Select';
import Button from '../Button';
import Percent from '../../assets/images/icon-percent.svg';
import Star from '../../assets/images/icon-star.svg';
import Counter from '../Counter';

import SunIcon from '../../assets/images/icon-sun.svg';
import DeliveryIcon from '../../assets/images/icon-delivery.svg';
import PropTypes, { object } from 'prop-types';
import { CartContext } from 'contexts/Cart';
// import useCart from 'contexts/Cart';

const ProductItem = ({ product, data, type, hoverAction, isFavorite }) => {
    console.log(product);
    const [selected, setSelected] = useState(false)
    const { productIDs, addToCart, deleteFromCart } = useContext(CartContext)

    const handleItemAddedToWishList = () => {
        setSelected(!selected);
    };

    return (
        <div className={`bg-white relative border-[0.5px] lg:px-16 lg:pb-16 lg:hover:shadow lg:hover:drop-shadow-2xl hover:z-20	${type === 'grid' || (type === 'list' && isFavorite) ? 'border-x-[0.5px] px-10' : 'border-x-0 lg:border-x-[0.5px] px-16'} border-gray-60 group`}>
            <div className='relative pt-24' style={{height: "450px"}}>
                <div className={`absolute left-0  ${type === 'grid' ? 'top-10 lg:top-16' : 'top-16'}  flex items-center`}>
                    <div className={`bg-black p-4 ${type === 'grid' ? 'h-16 w-16 p-2 lg:p-4 lg:h-20 lg:w-20' : 'h-20 w-20'} rounded-full flex items-center justify-center`}>
                        <Image src={Percent} alt="Percent" />
                    </div>
                    <div className={`bg-black p-4 ${type === 'grid' ? 'h-16 w-16 p-2 lg:p-4  lg:h-20 lg:w-20' : 'h-20 w-20'}  rounded-full flex items-center justify-center ml-8`}>
                        <Image src={Star} alt="Star" />
                    </div>
                </div>
                {/* /.absolute */}

            <div className={`absolute right-0  ${type === 'grid'?'top-10 h-16 w-16 lg:top-16  lg:h-20 lg:w-20':'top-16 h-20 w-20'}`} role='button' onClick={handleItemAddedToWishList}>
               {!isFavorite &&  <svg className='w-full h-full' viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z" className={`${selected?'fill-red stroke-red':'fill-cream stroke-gray-60'}`}/>
                </svg>}
                {
                    isFavorite && <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L19.9787 18.7135" stroke="#515151" stroke-width="2" />
                            <path d="M19.9785 1L0.999785 18.7135" stroke="#515151" stroke-width="2" />
                        </svg>
                    }
                </div>
                {/* /.absolute */}

                {/* <Link href={'/catalog/product' + product.id}> */}
                <Link href={`/catalog/product/${product.id}`}>
                    <Image src={product.images_new?.default} alt={product.alt} fill={true} style={{ objectFit: 'contain' }}/>
                </Link>
            </div>
            <div className='pb-10 border-b border-gray-30'>
                <div className={`font-ptsans  text-gray-60 leading-1 lg:leading-normal lg:text-14 ${type === 'grid' ? 'text-12' : 'text-14'}`}>[not Found]</div>
                <div className=''><Link href="/catalog/product" className={`font-kazimir block  italic text-gray-60 leading-none lg:leading-normal lg:text-20 ${type === 'grid' ? 'text-14' : 'text-20'}`}>{product.title}</Link></div>
            </div>
            <div className={`flex border-b border-gray-30 ${type === 'grid' ? 'mb-0' : 'mb-10'}`}>
                <div className={`text-10 px-4 whitespace-nowrap border-r border-gray-30  h-full items-center  pt-6 pb-6 ${type === 'grid' ? 'flex lg:hidden' : 'hidden'}`}>{product.weight} r</div>
                <div className={`font-ptsans   whitespace-nowrap overflow-hidden overflow-ellipsis ${type === 'grid' ? 'text-10 lg:text-14  pt-6 pb-6 lg:py-8 px-6 lg:px-0' : 'text-14  pt-10 pb-10'}`}>
                    {product.product_card}
                </div>
            </div>

            <div className={`mb-10 pb-10 lg:pt-12 lg:pb-12  border-b border-gray-30 ${type === 'grid' ? 'hidden lg:block' : 'lg:block'}`}>
                <div className='flex -mx-10'>
                    {
                        data.ingredients.map((ingredient, i) => {
                            return (
                                <div className='flex-1 px-10' key={i}>
                                    <div className='text-12 font-ptsans text-gray-60 mb-2'>{ingredient.name}</div>
                                    <ProgressBar percent={ingredient.quantity} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className={`${type === 'grid' ? 'flex items-center lg:hidden' : 'hidden'}`}>
                <div className='flex-1 border-r border-gray-30'>
                    <div className='font-kazimir text-14 text-gray-60 py-4 px-4 block text-center'>{product.price} ₽</div>
                </div>
                <div className='flex-1'>
                    <button className='font-muller font-medium text-12 text-black block w-full text-center px-8 py-4'>
                        Купить
                    </button>
                </div>
            </div>
            <div className={` items-center justify-between ${isFavorite ? 'flex pt-12 pb-12' : 'hidden'} lg:flex ${hoverAction ? 'lg:group-hover:hidden' : ''}`}>
                <div className=''>
                    <div className='font-ptsans text-14'>{product.weight} г</div>
                </div>
                <div className='flex-1'>
                    {/* <div className='flex items-center text-right h-full justify-end'> */}
                    {/* <div className='text-right'> */}
                    {/* <div className='font-kazimir text-gray-20 text-14 mr-10 leading-0 line-through'>700 ₽</div> */}
                    <div className='font-kazimir text-gray-60 text-20 leading-0 text-right'>{product.price} ₽</div>
                    {/* </div> */}
                </div>

            </div>
            {
                hoverAction &&
                <div className={`relative z-90 lg:-mx-[16.5px] ${type === 'grid' ? 'hidden lg:group-hover:block' : 'flex'}`}>

                    <div className=' lg:bg-white lg:absolute top-0 left-0 right-0 lg:px-16 lg:border-x-[0.5px] lg:border-b border-gray-60'>
                        <div className='w-full flex flex-col justify-center'>
                            {/* <div className='flex flex-wrap -mx-10'> */}
                            <div className='flex items-center justify-between py-20'>
                                <div className='lg:w-auto'>
                                    <span>{product.weight} г</span>
                                    {/* <Select name={'type'} wrapperClass="mb-6" selected={{ key: 1, value: '250 r' }} options={[{ key: 1, value: '250 r' }, { key: 2, value: '250 r' }]} /> */}
                                </div>

                                <div className='w-6/14'>
                                    {productIDs[product.id] || productIDs[product.id] > 0
                                        ?
                                        <Counter number={productIDs[product.id]} inProduct={true} onDecrease={() => deleteFromCart(product.id)} onIncrease={() => { addToCart(product.id) }}/>
                                        :
                                        <Button style='cursor-pointer' action={() => addToCart(product.id)}>Купить</Button>
                                    }
                                </div>
                                {/* <div className='w-6/12 px-10'> */}
                                <div className='px-10'>
                                    <div className='flex items-center text-right h-full justify-end'>
                                        {/* <div className='font-kazimir text-gray-20 text-14 mr-10 leading-0 line-through'>700 ₽</div> */}
                                        <div className='font-kazimir text-gray-60 text-20 leading-0'>{product.price} ₽</div>
                                    </div>
                                </div>
                                {/* <div className=' w-6/12 px-10'>
                                    <Select name={'type'} selected={{ key: 1, value: '250 r' }} options={[{ key: 1, value: '250 r' }, { key: 2, value: '250 r' }]} />
                                </div> */}
                                {/* <div className='w-6/12 px-10'>
                                    {!inCart && <Button style='cursor-pointer' action={() => setInCart(true)}>Купить</Button>}
                                    {inCart && <Counter inProduct={true} />}
                                </div> */}
                            </div>
                        </div>

                        <div className='pb-24'>
                            <div className='flex items-center'>
                                <Image src={SunIcon} alt="Sun" className='mr-10' />
                                <div className='text-12 lg:text-14'>Ближайшая обжарка — 25 февраля </div>
                            </div>
                            <div className='flex items-center'>
                                <Image src={DeliveryIcon} alt="Delivery" className='mr-10' />
                                <div className='text-12 lg:text-14'>Закажите до 24 фев — привезём 27–29 фев</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


ProductItem.propTypes = {
    hoverAction: PropTypes.bool,
    isFavorite: PropTypes.bool
}

ProductItem.defaultProps = {
    hoverAction: true,
    isFavorite: false,
}

export default ProductItem;
