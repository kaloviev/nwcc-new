import React from 'react';
import Layout from '../../components/Layouts/mainLayout';
import Breadcrumb from '../../components/Breadcrumb';
import Layout2 from '../../components/Layouts/layout2';
import TableRow from '../../components/Pages/OrderList/TableRow';
import ProductImage1 from '../../assets/images/cart-item-1.png';
import ProductImage2 from '../../assets/images/cart-item-2.png';
import ProductImage3 from '../../assets/images/cart-item-3.png';
const breadcrumb = [
    {
        name:'СЗКК Магазин',
        url:'/'
    },
    {
        name:'Личный кабинет'
    }
]
const OrderListPage = () => {
    const tableData = [
        {
            orderNo:'E-322245',
            date: '12.21.2022',
            status: 'в обработке',
            delivery:'СДЕК, самовывоз',
            address:'',
            goods:'5 товаров',
            price:'8 500 ₽',
            hasRepeat:false,
            products:[
                {
                    image:ProductImage1,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:1,
                    price:'1500'
                },
                {
                    image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
                },
                {
                    image:ProductImage3,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:false,
                    quantity:2,
                    price:'1500'
                }
            ]
        },
        {
            orderNo:'E-322245',
            date: '12.21.2022',
            status: 'в обработке',
            delivery:'СДЕК, самовывоз',
            address:'',
            goods:'5 товаров',
            price:'8 500 ₽',
            hasRepeat:false,
            products:[
                {
                    image:ProductImage1,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:1,
                    price:'1500'
                },
                {
                    image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
                },
                {
                    image:ProductImage3,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:false,
                    quantity:2,
                    price:'1500'
                }
            ]
        },
        {
            orderNo:'E-322245',
            date: '12.21.2022',
            status: 'доставлен',
            delivery:'СДЕК, самовывоз',
            address:'197736, Россия, Санкт-Петербург, Лиговский проспект, д. 50, корп. 14',
            goods:'5 товаров',
            price:'8 500 ₽',
            hasRepeat:true,
            products:[
                {
                    image:ProductImage1,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:1,
                    price:'1500'
                },
                {
                    image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
                },
                {
                    image:ProductImage3,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:false,
                    quantity:2,
                    price:'1500'
                }
            ]
        },
        {
            orderNo:'E-322245',
            date: '12.21.2022',
            status: 'отложен',
            delivery:'СДЕК, самовывоз',
            address:'',
            goods:'5 товаров',
            price:'8 500 ₽',
            hasRepeat:true,
            products:[
                {
                    image:ProductImage1,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:1,
                    price:'1500'
                },
                {
                    image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
                },
                {
                    image:ProductImage3,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:false,
                    quantity:2,
                    price:'1500'
                }
            ]
        },
        {
            orderNo:'E-322245',
            date: '12.21.2022',
            status: 'доставлен',
            delivery:'СДЕК, самовывоз',
            address:'197736, Россия, Санкт-Петербург, Лиговский проспект, д. 50, корп. 14',
            goods:'5 товаров',
            price:'8 500 ₽',
            hasRepeat:false,
            products:[
                {
                    image:ProductImage1,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:1,
                    price:'1500'
                },
                {
                    image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
                },
                {
                    image:ProductImage3,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:false,
                    quantity:2,
                    price:'1500'
                }
            ]
        },
        {
            orderNo:'E-322245',
            date: '12.21.2022',
            status: 'доставлен',
            delivery:'СДЕК, самовывоз',
            address:'197736, Россия, Санкт-Петербург, Лиговский проспект, д. 50, корп. 14',
            goods:'5 товаров',
            price:'8 500 ₽',
            hasRepeat:false,
            products:[
                {
                    image:ProductImage1,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:1,
                    price:'1500'
                },
                {
                    image:ProductImage2,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:true,
                    quantity:2,
                    price:'1500'
                },
                {
                    image:ProductImage3,
                    title:'Coffee Scouts. Кения',
                    type:'не молоть',
                    weight:'250 г',
                    available:false,
                    quantity:2,
                    price:'1500'
                }
            ]
        },
    ]
    return(
        <div className="container">
            <div className='py-40'>
                <div className='flex items-center flex-wrap w-full text-12 lg:text-14 border-b border-gray-80 pb-6'>
                    <div className='w-6/12 lg:w-[14%]  lg:pl-32 lg:pr-16'>Номер заказа</div>
                    <div className='w-3/12 lg:w-[11.60%]'>Дата</div>
                    <div className='w-3/12 lg:w-[11.60%] text-right lg:text-left'>Статус</div>
                    <div className='hidden lg:block lg:w-[35.74%]'>Доставка</div>
                    <div className='w-6/12 lg:w-[12.96%]'>Количество товаров</div>
                    <div className='w-3/12 text-right lg:text-left  ml-auto lg:ml-0 lg:w-[6.14%]'>Цена</div>
                    <div className='hidden lg:block lg:w-[6.82%]'></div>
                </div>

                <div className=''>
                    <div className=''>
                        {
                            tableData.map((data, i)=>{
                                return(
                                    <TableRow  key={i} data={data}/>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderListPage;

OrderListPage.getLayout = (page) => {
    return <Layout2 page={'orders'} title="Личный кабинет" breadcrumb={breadcrumb} meta={{title:'Личный кабинет', description:''}}>{page}</Layout2>
}