import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import Footer from '../Footer';
import OrderDetail from '../Pages/Checkout/orderDetail';
import AddressDetail from '../Pages/Checkout/addressDetail';
import Head from 'next/head';
import Button from '../Button';
import PropTypes from 'prop-types';
const CheckoutLayout = ({children, breadcrumb, title, meta, showOrderBox, isConfirmPage}) => {

    return(
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <link rel="icon" href={meta.icon || '/images/favicon.ico'} />
            </Head>
            <div>
                <Header/>
                <div className='container'>
                    <Breadcrumb routes={breadcrumb}/>
                    <h2 className='font-kazimir text-28 lg:mt-18  lg:text-36 md:mb-16'>{title}</h2>
                    <div className='pt-80 pb-32 lg:pt-0 md:pb-80 lg:pb-112'>
                        <div className='-mx-16 flex flex-wrap'>
                            <div className='w-full lg:w-9/12 xl:w-8/12 px-16'>
                                {children}

                                {!showOrderBox && <div className='lg:hidden'>
                                    <div className='mb-10'>
                                        <Button style={'w-full mb-18'}>Далее</Button>
                                    </div>

                                    <a className='flex justify-center'><span className='cursor-pointer underline text-14 font-muller'>Отложить на потом</span></a>
                                </div>}
                            </div>
                            {/* /.w-full */}
                            <div className='w-full lg:w-3/12 xl:w-4/12 px-16 xl:pl-40'>
                                <div className={`${showOrderBox?'block':'hidden'} lg:block`}><OrderDetail showCalculation={isConfirmPage}/></div>
                                <div className={`hidden lg:block`}><AddressDetail/></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}   

CheckoutLayout.proptypes = {
    showOrderBox: PropTypes.bool,
    isConfirmPage: PropTypes.bool
}

CheckoutLayout.defaultProps = {
    showOrderBox:false,
    isConfirmPage: false
}

export default CheckoutLayout;
