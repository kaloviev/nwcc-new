import Link from 'next/link';
import React, { useContext } from 'react';
import ContactNumber from '../Contact';
import Logo from '../Logo';
import ActionButtons from './actionButtons';
import AngleDownIcon from '../../assets/images/icon-angle-down.svg'
import Image from 'next/image'
import ContactsContext from 'contexts/Contacts'

const ForDesktop = () => {
    const contacts = useContext(ContactsContext)

    const menus = [
        {
            name: 'Главная',
            link:'/'
        },
        {
            name: 'Каталог',
            link:'/catalog'
        },
        {
            name: 'Программа лояльности',
            link:'/loyality-program'
        },
        {
            name: 'Оплата и доставка',
            link:'/shipping-payment'
        },
        {
            name: 'Контакты',
            link:'/contact'
        }
    ]
    return(
        <header className='py-6 px-16 exlg:py-8 exlg:px-24 hidden lg:block lg:mb-12'>
            <div className='flex items-center'>
                <Logo withName={true}/>

                <div className='px-20 exlg:px-40'>
                    <ul className='flex items-center'>
                        {menus.map((menu,i)=>{
                            return (
                                <li key={i}><Link href={menu.link} className="font-kazimir text-14 text-gray-60 px-10 exlg:px-16 block leading-0">{menu.name}</Link></li>
                            )
                        })}

                    </ul>
                </div>

                <div className='ml-auto flex items-center'>
                    <div className='mr-10 exlg:mr-24'>
                        <ContactNumber>
                            <span className='flex items-center font-kazimir text-14 py-14  cursor-pointer leading-0'>
                                {contacts.offices[0].phone}
                                <Image src={AngleDownIcon} alt={"Angle Down"} className="ml-6"/>
                            </span>
                        </ContactNumber>
                    </div>
                    <ActionButtons/>
                </div>
            </div>
        </header>
    )
}
export default ForDesktop;
