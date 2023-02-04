import React, { useState } from 'react';
import Logo from '../Logo';
import CloseIcon from '../../assets/images/icon-close.svg' ;
import AngleDownIcon from '../../assets/images/icon-angle-down.svg' ;
import Image from 'next/image';
import Link from 'next/link';
import ContactNumber from '../Contact';
import SlideInModal from '../SlideInModal';
const SlideInMenu = ({open, onClose}) => {
    const menus = [
        {
            title:'Главная',
            link:'/'
        },
        {
            title:'Магазин',
            link:'/catalog',
            subMenus:[
                {
                    title: 'Фильтр',
                    link:'/catalog'
                },
                {
                    title: 'Эспрессо',
                    link:'/catalog'
                },
                {
                    title: 'Капсулы',
                    link:'/catalog'
                },
                {
                    title: 'Дрипы',
                    link:'/catalog'
                },
                {
                    title: 'Аксессуары',
                    link:'/catalog'
                },
                {
                    title: 'Чистящие средства',
                    link:'/catalog'
                }
            ]
        },
        {
            title:'Программа лояльности',
            link:'/loyality-program',

        },
        {
            title:'Оплата и доставка',
            link:'/shipping-payment',

        },
        {
            title:'Контакты',
            link:'/contact',

        },
    ]
    return(
        <SlideInModal open={open} onClose={onClose}>
            <>
                <div className='flex items-center pb-14 mb-6'>
                    <Logo withName={false}/>
                    <div className='font-muller font-medium text-14 leading-tight relative top-2 ml-12'>
                        Северо-Западная<br/>
                        Кофейная Компания
                    </div>
                </div>

                <div className='mb-auto'>
                    <ul>
                        {menus.map((menu,i)=>{

                            return(
                                <li key={i} className="border-t border-gray-40 py-14 ">
                                    <Menu menu={menu}/>
                                </li>
                            )
                        })}

                    </ul>
                </div>


                <div className=''>
                    <ContactNumber>
                        <span className='flex items-center font-kazimir text-14 py-14 leading-0 cursor-pointer'>
                            (812) 644–87–90
                            <Image src={AngleDownIcon} alt={"Angle Down"} className="ml-6"/>
                        </span>
                    </ContactNumber>

                    <div className='-mx-16 bg-gray-0 pt-12 pb-0'>
                        <div className='px-16'>
                            <ul>
                                <li><Link href="/" className='font-muller text text-black block py-14 border-b border-gray-40'>Избранное</Link></li>
                                <li><Link href="/" className='font-muller text text-black block py-14 border-b border-gray-40'>Войти</Link></li>
                                <li className='flex items-center justify-between'>
                                    <Link href="/" className='font-muller text text-black block py-14'>Войти</Link>
                                    <Link href="/" className='font-muller text text-black block py-14'>4 товара —  7 500 Р</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        </SlideInModal>
    );
}

const Menu = ({menu}) => {
    const [active, setActive] = useState(false);
    const linkClass = 'font-kazimir text-18 text-black cursor-pointer block w-full';
    return(
        <div>
            { !menu.subMenus || menu.subMenus.length === 0 ? <Link href={menu.link} className={linkClass}>{menu.title}</Link>:<a className={linkClass} onClick={()=>setActive(!active)}>{menu.title}</a>}
            {menu.subMenus && <div className={`overflow-hidden ${active?'max-h-[1000px]':'max-h-0'} transition-all duration-300`}>
                    <ul className='mt-14'>
                        {menu.subMenus.map((list,i)=>{
                            return(
                                <li key={i}>
                                    <Link href={list.link} className="text-14 font-muller text-black block mb-14" >{list.title}</Link>
                                </li>
                            )
                        })}

                    </ul>
             </div>
            }
        </div>
    )
}

export default SlideInMenu;
