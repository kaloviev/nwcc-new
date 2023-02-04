import Image from 'next/image';
import React from 'react';
import CdekIcon from '../../../../assets/images/cdek.jpg';
import BusinessLineIcon from '../../../../assets/images/business-line.jpg';
import LogoIcon from '../../../../assets/images/Logo--dark.jpg';
import RadioComponent from '../../../Radio';
import Button from '../../../Button';
const DeliveryMethods = ({deliveryType}) => {
    return(
        <div className='mb-24'>
            <div className='border border-gray-80 mb-24'>
                <div className='p-16 border-b border-gray-80'>
                    <div className='flex items-start'>
                        <div className='max-w-[36px] pt-0 mr-10'>
                            <Image src={CdekIcon} alt="CDEK" className='w-full object-cover' width={36} height={36}/>
                        </div>
                        <div className=''>
                            <div className='font-semibold font-ptsans text-16'>СДЕК</div>
                            <div className='text-14 font-ptsans'>Наши партнёры CDEK доставят посылку в удобное для вас время</div>
                        </div>
                    </div>
                </div>

                <div className='pl-64 pt-24 pb-0'>
                    {
                        deliveryType === 'courier' && 
                    
                        <div className=''>
                            <RadioComponent name={'cdek'} isChecked={false}>
                                <span className='font-ptsans font-semibold text-16 block text-gray-60'>Обычная доставка</span>
                                <span className='font-ptsans text-16  block text-gray-60'>12 января, 350 ₽</span>
                            </RadioComponent>

                            <RadioComponent name={'cdek'} isChecked={true}>
                                <span>
                                    <span className='font-ptsans font-semibold text-16 block text-gray-60'>Экспресс доставка</span>
                                    <span className='font-ptsans text-16  block text-gray-60'>10-11 января, 500 ₽</span>
                                </span>
                            </RadioComponent>

                            <RadioComponent name={'cdek'} isChecked={false}>
                                <span>
                                    <span className='font-ptsans font-semibold text-16 block text-gray-60'>Гиперскоростная доставка</span>
                                    <span className='font-ptsans text-16  block text-gray-60'>5 января, 750 ₽</span>
                                </span>
                            </RadioComponent>
                        </div>
                    }
                    {
                        deliveryType === 'pickup' && 
                        <div className='pb-24'>
                            <p className='text-14 font-ptsans mb-20'>Невский проспект, д. 52, ТЦ «Галерея», 3 этаж, постаматы Боксберри Пн-Чт с 10:00 до 21:00, Пт-Сб с 10:00 до 18:00, Вс с 10:00 до 21:00</p>
                            <p className='font-ptsans font-semibold mb-20'>12 янв, 350 ₽</p>
                            <Button variant={'primary'}>Изменить пункт самовывоза</Button>
                        </div>
                    }
                </div>
            </div>
            <div className='p-16 bg-cream  mb-24'>
                <div className='flex items-start'>
                    <div className='max-w-[36px] pt-0 mr-10'>
                        <Image src={BusinessLineIcon} alt="CDEK" className='w-full object-cover' width={36} height={36}/>
                    </div>
                    <div className=''>
                        <div className='font-semibold font-ptsans text-16'>Деловые линии</div>
                        <div className='text-14 font-ptsans'>Наши партнёры Dellin доставят посылку в удобное для вас время</div>
                        <div className='text-16 font-ptsans font-semibold'>12 янв — 13 янв</div>
                    </div>
                </div>
            </div>
            {
                deliveryType === 'pickup' && 
                <div className='p-16 bg-cream'>
                    <div className='flex items-start'>
                        <div className='max-w-[36px] pt-0 mr-10'>
                            <Image src={LogoIcon} alt="CDEK" className='w-full object-cover' width={36} height={36}/>
                        </div>
                        <div className=''>
                            <div className='font-semibold font-ptsans text-16'>Самовывоз</div>
                            <div className='text-14 font-ptsans mb-10'>Бесплатно и без ожидания курьера!  Несколько точек выдачи</div>
                            <div className='text-16 font-ptsans font-semibold'>10 янв</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default DeliveryMethods;