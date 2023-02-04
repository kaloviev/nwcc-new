
import React, { useState } from 'react';



import CheckoutLayout from '../../../components/Layouts/checkoutLayout';


import Image from 'next/image';
import Input from '../../../components/Input';
import CheckboxComponent from '../../../components/Checkbox';

import MasterCardIcon from '../../../assets/images/master-card.png';
import ApplePayIcon from '../../../assets/images/apple-pay.png';
import SberBankIcon from '../../../assets/images/sber-bank.png';
import CashIcon from '../../../assets/images/cash-icon.svg';
const breadcrumb = [
    {
        name:'СЗКК Магазин',
        url:'/'
    },
    {
        name:'Корзина',
        url:'/checkout'
    },
    {
        name:'Оформление'
    }
]
const CheckoutPaymentPage = () => {
    

    return(
        <div className='lg:max-w-[535px]'>
             <div className='text-20 font-muller font-medium sm:mb-8'>Оплата</div>
         
             <div className='border border-gray-80 p-20 mb-24'>
                <div className='flex items-center '>
                    <div className='w-36 h-36 relative flex items-cnter justify-center mr-12'>
                        <Image src={MasterCardIcon} alt="Master Card" className='w-full object-contain' /> 
                   </div> <span className='font-medium text-18 font-ptsans'>Банковской картой</span>
                </div>
                <div className='py-14 pl-48 pr-0 lg:pr-32'>
                    <form>
                        <Input type="text" name="cardNumber" label="Номер карты"/>
                        <div className='flex -mx-10'>
                            <div className='px-10 flex-1'>
                                <Input type="text" name="vaildity" label="Срок действия"/>
                            </div>
                            <div className='px-10 flex-1'>
                                <Input type="text" name="csvCode" label="CSV-код"/>
                            </div>
                        </div>
                        <Input type="text" name="cardHolderName" label="Имя держателя карты"/>

                        <CheckboxComponent name="terms" id="terms" isChecked={false} checkboxStyle="top-0">
                            <span className="text">Адрес платежа совпадает с адресом доставки</span>
                        </CheckboxComponent>
                    </form>
                </div>
             </div>

             <div className='bg-cream  p-20 py-24 mb-24'>
                <div className='flex items-center '>
                    <div className='w-36 h-36 relative flex items-cnter justify-center mr-12'>
                        <Image src={ApplePayIcon} alt="Master Card" className='w-full object-contain' /> 
                   </div> <span className='font-medium text-18 font-ptsans'>ApplePay</span>
                </div>
             </div>

             <div className='bg-cream  p-20 py-24 mb-24'>
                <div className='flex items-center '>
                    <div className='w-36 h-36 relative flex items-cnter justify-center mr-12'>
                        <Image src={SberBankIcon} alt="Master Card" className='w-full object-contain' /> 
                   </div> <span className='font-medium text-18 font-ptsans'>Сбербанк Онлайн</span>
                </div>
             </div>

             <div className='bg-cream  p-20 py-24 mb-24'>
                <div className='flex items-center '>
                    <div className='w-36 h-36 relative flex items-cnter justify-center mr-12'>
                        <Image src={CashIcon} alt="Master Card" className='w-full object-contain' /> 
                   </div> <span className='font-medium text-18 font-ptsans'>Наличными</span>
                </div>
             </div>
        </div>
    )
}   

export default CheckoutPaymentPage;

CheckoutPaymentPage.getLayout = (page) => {
    return(
        <CheckoutLayout title="Оформление заказа" breadcrumb={breadcrumb} meta={{title:"Checkout Page", description:"Product Checkout Page"}}>{page}</CheckoutLayout>
    )
}