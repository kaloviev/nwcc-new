
import React, { useState } from 'react';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';

import CheckoutLayout from '../../../components/Layouts/checkoutLayout';


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
const CheckoutInformationPage = () => {
    return(
        <>
             <div className='text-20 font-muller font-medium sm:mb-8'>Контактные данные</div>
             <div className='text-14 font-medium font-muller bg-gray-0 py-10 px-10  text-center mb-18 sm:px-16 sm:inline-block sm:w-auto'>Уже зарегистрированы? Войдите в аккаунт</div>
             <form className='max-w-[466px]'>
                <Input name={'name'} label="Имя"/>
                <Input name={'email'} label="Email"/>
                <Input name={'telephone'} label="Телефон"/>

                <div className='bg-cream -mx-16 sm:mx-0 mb-20'>
                    <div className='p-16 sm:p-24 md:p-32 lg:p-40'>
                        <Checkbox name="createAccount" isChecked={true} id="createAccount" checkboxStyle="-top-0">Создать аккаунт</Checkbox>
                        <p className='mb-0 text-ptsans text-14'>
                            Создайте аккаунт, чтобы отслеживать статус заказов и получать накопительные скидки.
                        </p>
                    </div>
                </div>
             </form>
        </>
    )
}   

export default CheckoutInformationPage;

CheckoutInformationPage.getLayout = (page) => {
    return(
        <CheckoutLayout title="Оформление заказа" breadcrumb={breadcrumb} meta={{title:"Checkout Page", description:"Product Checkout Page"}}>{page}</CheckoutLayout>
    )
}