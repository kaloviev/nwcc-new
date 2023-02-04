
import React, { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import CheckoutLayout from '../../../components/Layouts/checkoutLayout';
import Modal from '../../../components/Modal';
import DeliveryMethods from '../../../components/Pages/Checkout/Delivery/deliveryMethods';
import Select from '../../../components/Select';



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
const CheckoutDeliveryPage = () => {
    
    const [selectedType, setSelectedType] = useState('courier');
    const [deliveryAddressOpen, setDeliveryAddressModalToggle] = useState(false);
    const setTab = (type) => {
        setSelectedType(type)
    }
    const selectedStyle = {
        backgroundImage:`url(/images/background-pattern.jpg)`
    }
    return(
        <div className='lg:max-w-[535px]'>
             <div className='text-20 font-muller font-medium sm:mb-8'>Метод доставки</div>
            
             <div className='flex border border-gray-80 mb-40'>
                <div className={`flex-1 flex flex-col items-center justify-center  p-16  cursor-pointer ${selectedType === 'courier'?'text-white':''}`} style={selectedType === 'courier'?selectedStyle:{}} onClick={()=>setTab('courier')}>
                    <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.6673 6.70181L20.4173 0.514307C20.2511 0.42292 20.0646 0.375 19.875 0.375C19.6854 0.375 19.4989 0.42292 19.3328 0.514307L8.08277 6.70181C7.90638 6.79892 7.75929 6.9416 7.65685 7.11494C7.55441 7.28829 7.50037 7.48595 7.50037 7.68731C7.50037 7.88866 7.55441 8.08632 7.65685 8.25967C7.75929 8.43302 7.90638 8.57569 8.08277 8.67281L18.75 14.5397V26.5986L15.3345 24.7198L14.25 26.6897L19.3328 29.4853C19.4988 29.5769 19.6854 29.6249 19.875 29.6249C20.0647 29.6249 20.2512 29.5769 20.4173 29.4853L31.6673 23.2978C31.8437 23.2007 31.9909 23.0581 32.0934 22.8847C32.1959 22.7114 32.25 22.5137 32.25 22.3123V7.68731C32.25 7.48592 32.1959 7.28823 32.0934 7.11488C31.9909 6.94153 31.8437 6.79888 31.6673 6.70181ZM19.875 2.78456L28.7906 7.68731L19.875 12.5901L10.9594 7.68731L19.875 2.78456ZM30 21.6474L21 26.5974V14.5386L30 9.58856V21.6474Z" fill="url(#paint0_linear_139_48419)"/>
                        <path d="M9.75 15H0.75V12.75H9.75V15Z" fill="url(#paint1_linear_139_48419)"/>
                        <path d="M12 24H3V21.75H12V24Z" fill="url(#paint2_linear_139_48419)"/>
                        <path d="M14.25 19.5H5.25V17.25H14.25V19.5Z" fill="url(#paint3_linear_139_48419)"/>
                        <defs>
                        <linearGradient id="paint0_linear_139_48419" x1="0.75" y1="0.375" x2="0.75" y2="29.6249" gradientUnits="userSpaceOnUse">
                        <stop stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        <stop offset="1" stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_139_48419" x1="0.75" y1="0.375" x2="0.75" y2="29.6249" gradientUnits="userSpaceOnUse">
                        <stop stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        <stop offset="1" stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_139_48419" x1="0.75" y1="0.375" x2="0.75" y2="29.6249" gradientUnits="userSpaceOnUse">
                        <stop stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        <stop offset="1" stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_139_48419" x1="0.75" y1="0.375" x2="0.75" y2="29.6249" gradientUnits="userSpaceOnUse">
                        <stop stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        <stop offset="1" stopColor={selectedType === 'courier'?'#fff':'#000'}/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className='text-14 pt-4 font-muller font-medium'>
                        Курьер
                    </div>
                </div>

                <div className={`flex-1 flex flex-col items-center justify-center  p-16  cursor-pointer ${selectedType === 'pickup'?'text-white':''}`}  style={selectedType === 'pickup'?selectedStyle:{}}  onClick={()=>setTab('pickup')}>
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.25133 5.58301C6.60402 2.81633 8.90901 0.643555 11.75 0.643555C14.591 0.643555 16.896 2.81633 17.2487 5.58301H18.4053C19.9197 5.58301 21.1966 6.71159 21.3826 8.21445L21.6076 10.032C22.0335 10.1748 22.4337 10.4158 22.7728 10.7549L29.2886 17.2706L27.8744 18.6848L21.3586 12.1692C20.9681 11.7786 20.3349 11.7786 19.9444 12.1692L19.7661 12.3475C19.3755 12.7381 19.3755 13.3713 19.7661 13.7618L22.645 16.6404C22.931 16.9264 23.0166 17.3565 22.8618 17.7302C22.7071 18.1039 22.3424 18.3476 21.9379 18.3476H11.5175C10.9653 18.3476 10.5175 18.7953 10.5175 19.3476L10.5175 24.04C10.5175 26.8014 12.7561 29.04 15.5175 29.04H28.5005L28.5005 20.8137L30.5005 20.8137L30.5005 30.04C30.5005 30.5923 30.0528 31.04 29.5005 31.04H15.5175C11.9771 31.04 9.05055 28.4116 8.58278 24.9997H3.76752C1.9905 24.9997 0.602947 23.4637 0.782944 21.6958L2.14897 8.27913C2.30487 6.74786 3.59435 5.58301 5.13354 5.58301H6.25133ZM6.20454 7.58301V9.68263H8.20454V7.58301H15.2955V9.6819L17.2955 9.68262V7.58301H18.4053C18.9101 7.58301 19.3358 7.9592 19.3978 8.46015L19.5967 10.067C19.2078 10.2128 18.843 10.4421 18.5302 10.755L18.3518 10.9333C17.1802 12.1049 17.1803 14.0045 18.3519 15.1761L19.5235 16.3476H11.5175C9.86069 16.3476 8.51754 17.6907 8.51754 19.3476L8.51754 22.9997H3.76752C3.17518 22.9997 2.71266 22.4877 2.77266 21.8984L4.13868 8.48172C4.19065 7.97129 4.62047 7.58301 5.13354 7.58301H6.20454ZM15.2243 5.58301H8.27571C8.60737 3.88845 10.057 2.64355 11.75 2.64355C13.443 2.64355 14.8926 3.88845 15.2243 5.58301Z" fill="url(#paint0_linear_139_48426)"/>
                        <defs>
                        <linearGradient id="paint0_linear_139_48426" x1="0.767212" y1="0.643555" x2="0.767212" y2="31.04" gradientUnits="userSpaceOnUse">
                            <stop stopColor={selectedType === 'pickup'?'#fff':'#000'}/>
                            <stop offset="1" stopColor={selectedType === 'pickup'?'#fff':'#000'}/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div className='text-14  pt-4 font-muller font-medium'>
                        Самовывоз
                    </div>
                </div>
             </div>
            
             <div className='text-20 font-muller font-medium mb-6'>Адрес доставки</div>
             <Select options={[
                {key:'1', value:"282881, Россия, Санкт-Петербург, Лиговский пр. 50, корп. 16, офис СЗКК"}, 
                {key:'2', value:"282881, Россия, Санкт-Петербург, Лиговский пр. 50, корп. 16, офис СЗКК"}]} 
                name="address"

            />

            <div className='flex -mx-10 mb-40'>
                <div className='flex-1 px-10'>
                    <Button variant={'primary'} style="w-full h-full" action={()=>setDeliveryAddressModalToggle(true)}>Редактировать адрес</Button>
                </div>
                <div className='flex-1 px-10'>
                    <Button variant={'primary'}  style="w-full h-full">Новый адрес</Button>
                </div>
            </div>

            <div className='text-20 font-muller font-medium mb-6'>Способ доставки</div>
            <DeliveryMethods deliveryType={selectedType}/>

            <Modal  open={deliveryAddressOpen} onClose={()=>setDeliveryAddressModalToggle(false)}>
                <div className=''>
                    <h3 className='text-20 font-muller font-medium mb-16 lg:mb-20'>Адрес доставки</h3>
                    <form>
                        <div className='-mx-10 flex flex-wrap'>
                            <div className='px-10 w-full lg:w-6/12'>
                                <Input type={'text'} name="index" label="Индекс"/>
                            </div>
                            <div className='px-10 w-full lg:w-6/12'>
                                <Input type={'text'} name="country" label="Страна"/>
                            </div>
                            <div className='px-10 w-full lg:w-6/12'>
                                <Input type={'text'} name="city" label="Город"/>
                            </div>
                            <div className='px-10 w-full lg:w-6/12'>
                                <Input type={'text'} name="outside" label="Улица"/>
                            </div>
                            <div className='px-10 w-full lg:w-6/12'>
                                <Input type={'text'} name="houseNumber" label="Номер дома"/>
                            </div>
                            <div className='px-10 w-full lg:w-6/12'>
                                <Input type={'text'} name="appartment" label="Квартира, офис"/>
                            </div>
                        </div>
            

                        <div className='pt-4 lg:flex lg:flex-row-reverse lg:justify-between'>
                            <div className='-mx-4 flex mb-10'>
                                <div className='px-4 flex-1'>
                                    <Button variant={'primary'} style="w-full lg:px-20">Отмена</Button>
                                </div>
                                <div className='px-4 flex-1'>
                                    <Button style="w-full lg:px-20">Сохранить</Button>
                                </div>
                            </div>
                            
                            <button className='px-16 font-medium font-muller text-14 inline-block py-16 w-6/12 lg:w-auto lg:px-0'>Удалить</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}   

export default CheckoutDeliveryPage;

CheckoutDeliveryPage.getLayout = (page) => {
    return(
        <CheckoutLayout title="Оформление заказа" breadcrumb={breadcrumb} meta={{title:"Checkout Page", description:"Product Checkout Page"}}>{page}</CheckoutLayout>
    )
}