import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import Footer from '../Footer';
import OrderDetail from '../Pages/Checkout/orderDetail';
import AddressDetail from '../Pages/Checkout/addressDetail';
import Head from 'next/head';
import Button from '../Button';
import Link from 'next/link';
import ProgressBar from '../ProgressBar';
import Tooltip from '../Tooltip';
import Router from 'next/router';

const Layout2 = ({children,meta, title, breadcrumb, page}) => {
    const handleTabMenuClick = (tab) => {
        Router.push(tab)
    }
    return(
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <link rel="icon" href={meta.icon || '/images/favicon.ico'} />
            </Head>
            <div>
                <Header/>
                <div className=''>
                    <div className='container'>
                        <Breadcrumb routes={breadcrumb}/>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-kazimir text-28 lg:mt-18  lg:text-36 md:mb-16clg:mb-0'>{title}</h2>

                        </div>
                    </div>
                        <div className='pt-76 lg:pt-0 lg:-mt-40 border-b border-gray-80'>
                            <div className='container'>
                                <div className='flex items-end justify-between'>
                                    <div className='flex lg:inline-flex w-full lg:w-auto border border-b-0 border-gray-80'>
                                        <div className={`font-muller font-medium text-14 px-10 lg:px-24 exlg:px-32 py-10 border-r border-gray-80 text-center cursor-pointer flex-1 lg:flex-auto ${page === 'orders'?'bg-gray-80 text-white':''}`}  onClick={()=>handleTabMenuClick('/order-list')}>Мои заказы</div>
                                        <div className={`font-muller font-medium text-14 px-10 lg:px-24 exlg:px-32 py-10 border-r border-gray-80 text-center cursor-pointer flex-1 lg:flex-auto ${page === 'favorites'?'bg-gray-80 text-white':''}`} onClick={()=>handleTabMenuClick('/favorites')}>Избранное</div>
                                        <div className={`font-muller font-medium text-14 px-10 lg:px-24 exlg:px-32 py-10 flex-1  lg:flex-auto text-center cursor-pointer ${page === 'settings'?'bg-gray-80 text-white':''}`} onClick={()=>handleTabMenuClick('/settings')}>Настройки</div>
                                    </div>



                                    <div className='hidden lg:block lg:w-5/12 xl:w-4/12 mb-10'>
                                        <div className='text-12 flex items-center justify-between mb-6'>
                                            <div className=''>Статус в системе СЗКК</div>
                                            <div className=''><Link href='/' className="underline">Подробнее про систему лояльности</Link></div>
                                        </div>

                                        <div className='bg-gray-0 py-10 px-16'>
                                            <div className='flex items-center justify-between'>
                                                <div className='font-kazimir text exlg:text-18'>Продвинутый <Tooltip direction="right">Lorem ipsum is a dummy text</Tooltip></div>
                                                <div className='font-kazimir text exlg:text-18'>Скаут <Tooltip direction="left">Lorem ipsum is a dummy text</Tooltip></div>
                                            </div>
                                            <ProgressBar percent={80}/>
                                            <div className='flex items-center justify-between pt-2'>
                                                <div className="font-ptsans text-12">До перехода на следующий статус:</div>
                                                <div className="font-ptsans text-12">4 500 ₽</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.pt-76 */}
                
                </div>
                <div>
                    {children}
                </div>
                
           
                <Footer/>
            </div>
        </>
    )
}   




export default Layout2;
