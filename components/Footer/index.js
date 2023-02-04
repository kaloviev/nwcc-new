import Link from 'next/link';
import React, { useContext } from 'react';
import ContactNumber from '../Contact';

import InstagramIcon from '../../assets/images/icon-instagram.svg';
import Image from 'next/image';
import ContactsContext from 'contexts/Contacts'
import ShopContext from 'contexts/Shop'

const PageFooter = () => {
    const contacts = useContext(ContactsContext)
    const shop = useContext(ShopContext)

    const mainLinks = [
        {
            title: 'Главная',
            link: '/'
        },
        {
            title: 'Программа лояльности',
            link: '/loyality-program'
        },
        {
            title: 'Оплата и доставка',
            link: '/shipping-payment'
        }
    ];

    // const otherLinks = [
    //     {
    //         title: 'Фильтр',
    //         link: '/'
    //     },
    //     {
    //         title: 'Эспрессо',
    //         link: '/'
    //     },
    //     {
    //         title: 'Капсулы',
    //         link: '/'
    //     },
    //     {
    //         title: 'Дрипы',
    //         link: '/'
    //     },
    //     {
    //         title: 'Аксессуары',
    //         link: '/'
    //     },
    //     {
    //         title: 'Чистящие средства',
    //         link: '/'
    //     }
    // ];
    const contactDetails = {
        phone: contacts.offices[0].phone,
        email: 'sales@nwcc.ru',
        instagramUsername: 'nwcc',
        address: `${contacts.offices[0].map.city}, ${contacts.offices[0].map.street}, ${contacts.offices[0].map.street}, ${contacts.offices[0].map.housenumber}`
    }

    return (
        <footer className="bg-gray-100 pt-30">
            <div className="container">
                <div className='flex flex-wrap -mx-16'>
                    <div className='w-6/12 lg:w-4/12 px-16'>
                        <div className='mb-30'>
                            <ul>
                                {mainLinks.map((mainLink, i) => {
                                    return (
                                        <li key={i}><Link href={mainLink.link} className='text-18 font-kazimir text-white mb-16 block'>{mainLink.title}</Link></li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                    {/* /.w-6/12 */}
                    <div className='w-6/12 lg:w-5/12 px-16'>
                        <div className='mb-30'>
                            <h2 className='text-18 font-kazimir text-white mb-16 block'>Магазин</h2>
                            <ul>
                                {shop.categories.map(({ id, title }, i) => {
                                    return (
                                        <li key={i}><Link href={`/shop?category=${id}`} className='text-14 font-muller text-white mb-8 block'>{title}</Link></li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                    {/* /.w-6/12 */}

                    <div className='w-full lg:w-3/12 px-16'>
                        <div className=''>
                            <h2 className='text-18 font-kazimir text-white mb-16 block'>Контакты</h2>
                            <ul>
                                <li className='mb-4'><ContactNumber inBottom={true}><span className='font-muller text-12 text-white block'>{contactDetails.phone}</span></ContactNumber></li>
                                <li className='mb-4'>
                                    <a href={`mailto:${contactDetails.email}`} target="_blank" rel="noreferrer" className='font-muller text-12 text-white block'>{contactDetails.email}</a>
                                </li>
                                <li className='mb-4'>
                                    <a href={`https://instagram.com/${contactDetails.instagramUsername}`} rel="noreferrer" target="_blank" className='font-muller flex items-center text-12 text-white'>
                                        <Image src={InstagramIcon} height="16" width="16" alt="Instagram" className='mr-6' />  {contactDetails.instagramUsername}
                                    </a>
                                </li>
                                <li>
                                    <a className='font-muller text-12 text-white'>{contactDetails.address}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /.w-full*/}
                </div>
                {/* /.flex */}

                <div className='pt-10 border-t border-gray-60 text-12 font-ptsans text-white mt-30 pb-10'>
                    © Северо-Западная Кофейная Компания, 2022
                </div>
            </div>
            {/* /.container */}
        </footer>
    )
}

export default PageFooter;
