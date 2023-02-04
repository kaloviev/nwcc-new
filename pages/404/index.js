import React from 'react';
import Layout from '../../components/Layouts/mainLayout';
import DogIcon from '../../assets/images/dog_walk.png';
import Image from 'next/image';
import Link from 'next/link';
const ErrorPage = () => {
    return(
        <div className='lg:mt-64'>
            <div className='container relative py-76 md:py-96  xl:py-56 lg:pb-0 h-full'>
                <div className='flex items-center justify-center mb-76 md:mb-96 lg:mb-0'>
                    <div className='relative inline-flex items-center justify-center'>
                        <div className='font-kazimir text-[100px] md:text-[200px] lg:text-[300px] exlg:text-[400px] xl:text-[500px] absolute -top-[50px] md:-top-[96px] lg:relative lg:top-0  left-0'>4</div>
                        <div className='px-[50px] md:px-96 lg:px-24'><Image src={DogIcon} alt="404" className='max-w-[200px] lg:max-w-[400px]'/></div>
                        <div className='font-kazimir text-[100px] md:text-[200px] lg:text-[300px] exlg:text-[400px] xl:text-[500px]  absolute -bottom-[50px] md:-bottom-[96px] lg:relative lg:bottom-0  right-0'>4</div>
                    </div>
                </div>

                <div className='text-center lg:text-left max-w-[380px] mx-auto lg:absolute lg:top-0 left-0'>
                    <p className='mb-20'> Сожалеем, мы не нашли запрошенной страницы, но мы можем найти много кофе! Попробуйте начать со страницы каталога =) </p>
                    <p>
                        <Link href={'/shop'} className="underline">Ознакомиться с каталогом</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage;

ErrorPage.getLayout = (page) =>{
    return(
        <Layout
            meta={{title:"404", description:"Something went wrong."}}
            showFooter={false}
        >
            {page}
        </Layout>
    )
}
