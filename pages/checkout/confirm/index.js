
import Link from 'next/link';
import React from 'react';



import CheckoutLayout from '../../../components/Layouts/checkoutLayout';
import Textarea from '../../../components/Textarea';


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
        <div className=''>
             <div className='text-20 font-muller font-medium mb-24'>
                    Заказ готов к оплате.<br/>
                    Давайте проверим, всё ли правильно?
            </div>

            <div className=''>
                
                    <div className='pt-20 pb-20 border-t border-gray-40 lg:pb-32 lg:pt-32'>
                        <div className='flex -mx-16 flex-wrap '>
                            <div className='w-4/12 lg:w-3/12 px-16'>
                                <h3 className='text-12 font-muller font-medium mb-4 leading-none  lg:text-16 exlg:text-20'>Оформление</h3>
                                <Link href="/"><span className='underline text-12 lg:text-14 exlg:text-16'>Изменить</span></Link>
                            </div>
                            <div className='w-8/12 lg:w-9/12 px-16'>
                                <div className='text-12 lg:text-14 exlg:text-16 leading-6'>
                                    <h3 className=' font-muller font-medium mb-4'>Контакты</h3>
                                    <p > Михаил Максимов<br/>
                                        •••••••••2000@gmail.com<br/>
                                        • ••• •••–70–60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div className='pt-20 pb-20 border-t border-gray-40 lg:pb-32 lg:pt-32'>
                        <div className='flex -mx-16 flex-wrap '>
                            <div className='w-4/12 lg:w-3/12 px-16'>
                                <h3 className='text-12   lg:text-16 exlg:text-20 font-muller font-medium mb-4 leading-none'>Доставка</h3>
                                <Link href="/"><span className='underline text-12 lg:text-14 exlg:text-16'>Изменить</span></Link>
                            </div>
                            <div className='w-8/12 lg:w-9/12 px-16'>
                                <div className='flex flex-wrap -mx-16'>
                                    <div className='w-full md:w-6/12 px-16'>
                                        <div className='text-12 lg:text-14 exlg:text-16  leading-6 pb-10'>
                                            <h3 className='font-muller font-medium mb-4'>Служба доставки</h3>
                                            
                                            <p className='mb-16'>СДЕК<br/>
                                                11 янв — 15 янв
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-6/12 px-16'>
                                        <div className='text-12 lg:text-14 exlg:text-16  leading-6 pb-10'>
                                            <h3 className='font-muller font-medium mb-4'>Адрес</h3>
                                            <p>
                                                282881,<br/>
                                                Россия <br/>
                                                Санкт-Петербург, Лиговский пр.  <br/>
                                                50, корп. 16, офис СЗКК
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-20  border-t  border-gray-40 lg:pb-32 lg:pt-32'>
                        <div className='flex -mx-16 flex-wrap '>
                            <div className='w-4/12 lg:w-3/12 px-16'>
                                <h3 className='text-12 font-muller font-medium mb-4 leading-none  lg:text-16 exlg:text-20'>Оплата</h3>
                                <Link href="/"><span className='underline text-12 lg:text-14 exlg:text-16'>Изменить</span></Link>
                            </div>
                            <div className='w-8/12 lg:w-9/12 px-16'>
                                <div className='flex flex-wrap -mx-16'>
                                    <div className='w-full md:w-6/12 px-16'>
                                        <div className='text-12 lg:text-14 exlg:text-16  leading-6 pb-10'>
                                            <h3 className='font-muller font-medium mb-4'>Банковская карта</h3>
                                            
                                        
                                            
                                            <p className='mb-16'> MasterCard <br/>
                                                •••••••••••••••••8577
                                            </p>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className='w-full md:w-6/12 px-16'>
                                        <div className='text-12 lg:text-14 exlg:text-16  leading-6 pb-10'>
                                            <h3 className='font-muller font-medium mb-4'>Платежные данные</h3>
                                            <p>
                                                Mikhail Maksimov<br/>
                                                Санкт-Петербург, Лиговский пр.  <br/>
                                                50, корп. 16, офис СЗКК <br/>
                                                Лиговский пр. 50, корп. 16
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-24  border-t border-gray-40'>
                            <h3 className='text-12 lg:text-14 exlg:text-16 font-muller font-medium mb-8 leading-none'>Комментарий к заказу</h3>
                            <Textarea name="additionalInformation" placeholder="Комментарий для нас или для курьерской службы."/>
                        </div>
                </div>
            </div>
        </div>
    )
}   

export default CheckoutPaymentPage;

CheckoutPaymentPage.getLayout = (page) => {
    return(
        <CheckoutLayout 
            title="Оформление заказа" 
            breadcrumb={breadcrumb} 
            meta={{title:"Checkout Page", description:"Product Checkout Page"}}
            showOrderBox={true}
            isConfirmPage={true}
        >{page}</CheckoutLayout>
    )
}