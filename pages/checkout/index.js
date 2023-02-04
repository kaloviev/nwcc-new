import React, { useState } from 'react';

import CheckoutLayout from '../../components/Layouts/checkoutLayout';

import CartImage1 from '../../assets/images/cart-item-1.png';
import CartImage2 from '../../assets/images/cart-item-2.png';
import CartImage3 from '../../assets/images/cart-item-3.png';


import CartTable from '../../components/Pages/Checkout/cartTable';
const breadcrumb = [
    {
        name:'СЗКК Магазин',
        url:'/'
    },
    {
        name:'Корзина'
    }
]
const CheckoutPage = () => {
   

    const [cartItems,setCartItems] = useState([
        {
            id:1,
            name:'Coffee Scouts. Кения',
            type: '250r',
            variation:'Не молоть',
            quantity:1,
            price: 1500,
            image: CartImage1
        },
        {
            id:2,
            name:'Coffee Scouts. Кения',
            type: '250r',
            variation:'Не молоть',
            quantity:2,
            price: 1500,
            image: CartImage2
        },
        {
            id:3,
            name:'Coffee Scouts. Кения',
            type: '250r',
            variation:'Не молоть',
            quantity:2,
            price: 1500,
            image: CartImage3
        }
    ])

    return(
        <>
             <CartTable cartItems={cartItems}/>
        </>
    )
}   

export default CheckoutPage;

CheckoutPage.getLayout = (page) => {
    return(
        <CheckoutLayout title="Список товаров" breadcrumb={breadcrumb} meta={{title:"Checkout Page", description:"Product Checkout Page"}}>{page}</CheckoutLayout>
    )
}