import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layouts/mainLayout';
import LoyalityBackground from '../../assets/images/loyaliy-thumbnail.jpg';
import Image from 'next/image';
import ContactNumber from '../../components/Contact';
const LoyalityProgramPage = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Программа лояльности'
        }
    ]

    const discountLabels =[
        {
            title:'Базовый',
            labels:[
                {
                    label:'Скидка',
                    value: '5%'
                },
                {
                    label:'Сумма от',
                    value: '5 000 ₽'
                },
                {
                    label:'Бонус',
                    value: 'Дрип БЛ7 в подарок к каждому заказу'
                }
            ]
        },
        {
            title:'Средний',
            labels:[
                {
                    label:'Скидка',
                    value: '10%'
                },
                {
                    label:'Сумма от',
                    value: '15 000 ₽'
                },
                {
                    label:'Бонус',
                    value: 'Блокнот бариста / Бортовой журнал бариста в подарок'
                }
            ]
        },
        {
            title:'Продвинутый',
            labels:[
                {
                    label:'Скидка',
                    value: '15%'
                },
                {
                    label:'Сумма от',
                    value: '20 000 ₽'
                },
                {
                    label:'Бонус',
                    value: 'Бесплатная доставка до постомата'
                }
            ]
        },
        {
            title:'Скаут',
            labels:[
                {
                    label:'Скидка',
                    value: '20%'
                },
                {
                    label:'Сумма от',
                    value: '30 000 ₽'
                },
                {
                    label:'Бонус',
                    value: (<><p>Бесплатная курьерская доставка</p><p>3 шт. дрипа Coffee Scout в подарок к каждому заказу</p></>)
                }
            ]
        }
    ]
    return(
        <div className='container'>
            <Breadcrumb routes={breadcrumb}/>
            <h2 className='font-kazimir text-28 lg:mt-18  lg:text-36'>Программа лояльности</h2>

            <div className='pt-80 lg:pt-24 md:pb-80 lg:pb-96'>
                <div className='flex flex-wrap justify-between -mx-16 mb-64 lg:mb-0'>
                    <div className='w-full lg:w-6/12 px-16'>
                        <div className='post mb-64 lg:mb-0'>
                            <p>В нашем магазине действует накопительная система скидок. Это значит, что размер вашей скидки зависит от общей суммы всех Ваших заказов, начиная с первого.</p>
                            <p>Размер достигнутых скидок имеет срок - 3 месяца. Мы выбрали такой период, чтобы не устанавливать высокие рамки для достижения нового статуса и нового уровня скидок. А также, чтобы Вы могли выгоднее заказывать Ваш любимый кофе. О конце срока действия скидок мы Вам напомним письмом и смс за 7 дней.</p>
                            <p>Также, мы приготовили приятные бонусы для каждого уровня.</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 px-16'>
                        <div className='-mx-16'>
                            <Image src={LoyalityBackground} alt="Loyality Image" className='min-h-[250px] w-full object-cover object-center'/>
                        </div>
                    </div>
                </div>
                {/* /.flex */}
                <div className='lg:pb-24'>
                    <h3 className='text-28 font-muller font-medium mb-8 lg:mb-12'>Уровни скидок</h3>
                    <div className='flex flex-wrap -mx-16'>
                        {
                            discountLabels.map((discountLabel,i)=>{
                                return(
                                    <div  key={i} className='w-full md:w-6/12 xl:w-3/12 px-16  mb-20 md:mb-32'>
                                        <div className='bg-cream px-20 py-24 h-full'>
                                            <div className='font-kazimir text-28 mb-12'>{discountLabel.title}</div>
                                            <div>
                                                {discountLabel.labels.map((item,i)=>{
                                                    return(
                                                        <div className={`py-8  ${discountLabel.labels.length - 1 != i?'border-b border-gray-20':''}`} key={i}>
                                                            <div className='flex -mx-4'>
                                                                <div className='max-w-[85px] w-full px-4'>
                                                                    <div className='font-ptsans text-16'>{item.label}</div>
                                                                </div>
                                                                <div className='w-full px-4'>
                                                                    <div className='font-ptsans text-16'>
                                                                        <div className='post'>{item.value}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* /.flex */}
                </div>

                <div className='pb-32'>
                    <div className='flex flex-wrap -mx-16'>
                        <div className='w-full lg:w-6/12 px-16'>
                            <div className='mb-32'>
                                <h3 className='mb-10 lg:mb-16 text-28 font-muller font-medium leading-snug'>Условия получения скидки</h3>
                                <div className=''>
                                <ul className='dot-list'>
                                        <li>Вы должны быть авторизованный через личный кабинет (чтобы мы точно знали что это Вы)</li>
                                        <li>Сумма заказов не включает стоимость доставки</li>
                                        <li>Учитываются только заказы на кофе</li>
                                        <li>Подписка на кофе не участвует в системе лояльности</li>
                                        <li>Следующий уровень скидок начинает действовать со следующего заказа</li>
                                        <li>Скидки не суммируются. Скидка на товар отменяются, если накопительная скидка больше</li>
                                    </ul>
                                </div>
                            </div>
                            {/* /.mb-32 */}
                        </div>
                        {/* /.w-full */}
                        <div className='w-full lg:w-6/12 px-16'>
                            <div className='mb-32'>
                                <h3 className='mb-10  lg:mb-16 text-28 font-muller font-medium leading-snug'>Если остались вопросы</h3>
                                <div className=''>
                                    <ContactNumber><a className='font-kazimir text-20 cursor-pointer'>+7 (812) 640-87-90</a></ContactNumber>
                                    <p>
                                        <a href="mailto:info@nwcc.ru" className='font-kazimir text-20 cursor-pointer'>info@nwcc.ru</a>
                                    </p>
                                </div>
                            </div>
                            {/* /.mb-32 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoyalityProgramPage;

LoyalityProgramPage.getLayout = (page) => {
    return(
        <Layout meta={{title:'Loyality Program', decription:'loyality prgram'}}>
            {page}
        </Layout>
    )
}
