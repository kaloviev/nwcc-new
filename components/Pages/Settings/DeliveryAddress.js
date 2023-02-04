import React, { useState } from 'react';
import EditIcon from '../../../assets/images/icon-edit.svg';
import Image from 'next/image';
import Button from '../../Button';
import Modal from '../../Modal';
import Input from '../../Input';
const DeliveryAddress = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const addresses = [
        {
            title:'Адрес 1',
            detail:'282881, Россия, Санкт-Петербург, Лиговский пр. 50, корп. 16, офис СЗКК'
        },
        {
            title: 'Адрес 2',
            detail:'282881, Россия, Санкт-Петербург, Лиговский пр. 50, корп. 16, офис СЗКК'
        }
    ]
    return(
        <div className=''>
            <h3 className='font-muller font-medium text-20 mb-20'>Адреса для доставки</h3>
            <div className=''>
                <div className='mb-24'>
                {addresses.map((address,i)=>{
                    
                    return(
                        <div className='font-ptsans text-14 font-medium mb-16 ' key={i}>
                            <div className='mb-8 flex items-center justify-between'>
                                {address.title}

                               {i != 0 &&  <Image src={EditIcon} alt="Edit" className='w-16 cursor-pointer'/>}
                            </div>
                            <div className='pl-8 bg-cream p-8'>{address.detail} </div>
                        </div>
                    )
                })}
                </div>
                <Button type="button" variant={'primary'} style="w-full  lg:px-32 lg:w-auto" action={()=>setModalOpen(true)}>Новый адрес</Button>
            </div>

            <Modal open={modalOpen} onClose={()=>setModalOpen(!modalOpen)}>
                <div className=''>
                    <h2 className='text-20 font-muller font-medium mb-18'>Адрес доставки</h2>
                    <div className='-mx-16 flex flex-wrap'>
                        <div className='w-full lg:w-6/12 px-16'>
                            <Input type={'text'} name="index" label={'Индекс'}/>
                        </div>
                        <div className='w-full lg:w-6/12 px-16'>
                            <Input type={'text'} name="country" label={'Страна'}/>
                        </div>
                        <div className='w-full lg:w-6/12 px-16'>
                            <Input type={'text'} name="town" label={'Город'}/>
                        </div>
                        <div className='w-full lg:w-6/12 px-16'>
                            <Input type={'text'} name="street" label={'Улица'}/>
                        </div>
                        <div className='w-full lg:w-6/12 px-16'>
                            <Input type={'text'} name="house_number" label={'Номер дома'}/>
                        </div>
                        <div className='w-full lg:w-6/12 px-16'>
                            <Input type={'text'} name="appartment" label={'Квартира, офис'}/>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Button variant={'danger'}>Удалить</Button>
                        <div className='-mx-4 flex items-center'>
                            <div className='px-4'>
                                <Button variant={'primary'}>Отмена</Button>
                            </div>
                            <div className='px-4'>
                                <Button variant={'default'}>Сохранить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DeliveryAddress;