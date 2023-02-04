import React, { useContext } from 'react';
import PercentIcon from '../../../../../assets/images/icon-percent.svg';
import SunIcon from '../../../../../assets/images/icon-sun.svg';
import DeliveryIcon from '../../../../../assets/images/icon-delivery.svg';
import Image from 'next/image';
import Select from '../../../../Select';
import Button from '../../../../Button';
import { CartContext } from 'contexts/Cart';
import Counter from 'components/Counter';

const CartForm = ({ product }) => {
    const {productIDs, deleteFromCart, addToCart} = useContext(CartContext)
    console.log(product.evaluation);

    return (
        <div className='border border-gray-80 p-20 py-24'>
            <div className='flex items-center font-kazimir text-28 leading-0 mb-28'>
                <div className=''>
                    <div className='w-20 h-20 bg-black rounded-full flex items-center justify-center mr-10 relative -top-2'>
                        <Image src={PercentIcon} alt="Percent Icon" />
                    </div>
                </div>
                <div className='text-gray-80 mr-10'>{product.price} ₽</div>
                {/* <div className='text-gray-20 line-through'>{product.price}</div> */}
            </div>

            <div className='-mx-8 flex mb-20'>
                <div className='w-6/12 px-8'>
                    {/* <Select label={'Bec'} options={[{key:250, value:'250 r'}]} /> */}
                    {product.weight} г.
                </div>
                <div className='w-6/12 px-8'>
                    [not found]
                    {/* <Select label={'Помол'} options={[{key:250, value:'Не молоть'}]} /> */}
                </div>
            </div>

            {product.evaluation &&
            <div className='bg-[#FFEFB7] p-12 lg:p-10 mb-20'>
                <ul>
                    <li className='flex mb-10'>
                        <div className='pr-10 pt-2'>
                            <Image src={SunIcon} alt="sun" />
                        </div>
                        <div className='flex leading-tight -mx-10'>
                            <div className='px-10 font-ptsans text exlg:text-14 flex-1 exlg:flex-auto'>
                                Ближайшая обжарка
                            </div>
                            <div className='px-10 font-ptsans text exlg:text-14 flex-1  exlg:flex-auto'>
                                25 февраля
                            </div>
                        </div>
                    </li>
                    <li className='flex mb-10  exlg:mb-0'>
                        <div className='pr-10 pt-2'>
                            <div className='p-8 relative'>
                                <Image src={DeliveryIcon} alt="Delivery" className='absolute inset-0 object-contain object-center' />
                            </div>

                        </div>
                        <div className='flex leading-tight -mx-10'>
                            <div className='px-10 font-ptsans text exlg:text-14 flex-1'>
                                Закажите до 24 фев — привезём <span className='italic'>27–29 фев</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
}
            <div className='flex items-center'>
                {/* <Button style={'w-full'} action={() => addToCart(product.id)}>Добавить в корзину</Button> */}

                {productIDs[product.id] || productIDs[product.id] > 0
                    ?
                    <Counter number={productIDs[product.id]} inProduct={true} onDecrease={() => deleteFromCart(product.id)} onIncrease={() => { addToCart(product.id) }} />
                    :
                    <Button style={'w-full'} action={() => addToCart(product.id)}>Добавить в корзину</Button>
                }

                <div className='flex items-center pl-10'>
                    <button className={'max-w-[22px]'}>
                        <svg className='w-full h-full' viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* className={`${selected?'fill-red stroke-red':'fill-cream stroke-gray-60'}`} */}
                            <path d="M8.88659 16.6603L8.88587 16.6596C6.30104 14.3157 4.19578 12.4033 2.73088 10.6111C1.27148 8.82559 0.5 7.22062 0.5 5.5C0.5 2.68674 2.69555 0.5 5.5 0.5C7.08885 0.5 8.62206 1.24223 9.62058 2.40564L10 2.84771L10.3794 2.40564C11.3779 1.24223 12.9112 0.5 14.5 0.5C17.3045 0.5 19.5 2.68674 19.5 5.5C19.5 7.22062 18.7285 8.82559 17.2691 10.6111C15.8042 12.4033 13.699 14.3157 11.1141 16.6596L11.1134 16.6603L10 17.6738L8.88659 16.6603Z" className={`fill-cream stroke-gray-60`} />

                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CartForm;
