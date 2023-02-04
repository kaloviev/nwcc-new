import React from 'react';
import Button from '../../Button';
import CheckboxComponent from '../../Checkbox';


const OrderDetail = ({showCalculation}) => {
    const infoItems = [
        {
            name:'Информация'
        },
        {
            name:'Доставка'
        },
        {
            name:'Оплата'
        }
    ]
    return(
       <div className='-mx-16 lg:mx-0'>
        <div className='bg-[#F4F4F4] p-16 pb-20 xl:p-40'>
            <h3 className='text-18 xl:text-20 font-muller font-bold mb-16'>Ваш заказ</h3>

            <div className='hidden lg:flex items-center relative pb-16 border-b border-gray-40 mb-16 xl:pb-20 xl:mb-20'>
                {infoItems.map((info,i)=>{
                    let infoClass = ' flex flex-col ';
                    if( i == 0){
                        infoClass+="text-left items-start ";
                    }
                    if( i == 1){
                        infoClass+="text-center items-center";
                    }
                    if( i == 2){
                        infoClass+="text-right items-end";
                    }
                    return(
                        <div className={`flex-1 ${infoClass}`} key={i}>
                            <div className='w-20 h-20 border border-gray-80 bg-[#f4f4f4] relative z-10 font-kazimir text-14 text-gray-80 rounded-full text-center flex items-center justify-center leading-0 pt-4 mb-2 xl:mb-4'>{i+1}</div>
                            <div className='text-10 xl:text-14 font-kazimir'>{info.name}</div>
                        </div>
                    )
                })}
               <div className='absolute top-10 left-20 right-20 border-t border-gray-80'></div>
            </div>

            <div className='flex items-end justify-between text-gray-40 pb-14 border-t border-gray-40 lg:border-t-0 pt-16 lg:pt-0'>
                <div>
                    <div className='font-ptsans text-12 leading-0 xl:text-14 mb-4'>Товары</div>
                    <div className='font-ptsans text-16 lg:text-14  xl:text-18'>5 товаров</div>
                </div>

                <div className='font-ptsans font-medium text-16 lg:text-14  xl:text-18 hidden lg:block'>
                    6 800,00 ₽
                </div>
            </div>

            <div className='bg-white font-ptsans text-12 xl:text-14 text-gray-60 leading-tight p-10 xl:px-16 mb-16 hidden lg:block'>
            Наберите товаров ещё на 1200 рублей для бесплатной доставки
           </div> 
            { showCalculation && <>
                <div className='flex flex-wrap items-end justify-between text-gray-40  border-t border-gray-40 pt-16 pb-12'>
                    <div>
                        <div className='font-ptsans text-12 leading-none xl:text-14'>Доставка</div>
                        <div className='font-ptsans text-16 lg:text-14  xl:text-18'>СДЕК</div>
                    </div>

                    <div className='font-ptsans font-medium text-16  xl:text-18 hidden lg:block'>
                        350,00 ₽
                    </div>
                    <div className='w-full'>
                        <div className='text-14 font-ptsans'>11 янв — 15 янв</div>
                    </div>
                </div>

                <div className='flex flex-wrap items-end justify-between text-gray-40 border-t border-gray-40 pt-16 pb-12'>
                    <div>
                        <div className='font-ptsans text-12 leading-none xl:text-14'>Оплата</div>
                        <div className='font-ptsans text-16 lg:text-14 xl:text-18'>Налог НДС +1500%</div>
                    </div>

                    <div className='font-ptsans font-medium text-16 lg:text-14  xl:text-18 hidden lg:block'>
                        5 600,44 ₽
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-between text-gray-40  border-t border-gray-40 pt-16 xl:mb-16'>
                    <div>
                        <div className='font-ptsans text-12 leading-none xl:text-14'>Итого к оплате</div>
                    </div>

                    <div className='font-kazimir italic text-[46px] lg:text-30 w-full xl:w-auto text-gray-80'>
                        8 150,44 ₽
                    </div>
                </div>

                <div className=''>
                <div className='text-14 font-ptsans'>Положения и условия</div>
                <CheckboxComponent>
                        <span className='text-14 font-ptsans'>Мною прочитаны, поняты и приняты Правила обработки персональных данных и Правила оплаты и доставки</span>
                </CheckboxComponent>
                </div>
            </>

            }
           


           <div className='border-b border-gray-40 mb-16'></div>
            <div className='mb-8'>
                <Button style={'w-full'}>Оформить заказ</Button>
            </div>
            <a className='cursor-pointer text-center block w-full'><span className='underline text-14 font-muller font-medium'>Отложить на потом</span></a>
        </div>
    </div>
    )
}

export default OrderDetail;