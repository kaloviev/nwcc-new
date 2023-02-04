import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Layout from '../../components/Layouts/mainLayout';
import httpClient from 'services/HttpClient';
import useSWR, { SWRConfig } from 'swr';

const breadcrumb = [
    {
        name: 'СЗКК Магазин',
        url: '/'
    },
    {
        name: 'Доставка и оплата'
    }
]

const ShippingPaymentPage = () => {
    const {data} = useSWR('/shop/delivery', () => httpClient.get('/shop/delivery'))

    return (
        <div className='container'>
            <Breadcrumb routes={breadcrumb} />
            <h2 className='font-kazimir text-28 lg:mt-18  lg:text-36'>{data?.title}</h2>
            <div className='pt-80 md:pb-80 lg:pb-96'>
                {data.info_blocks.map((info, i) => {
                    return (
                        <div key={i} className={`${data.info_blocks.length - 1 === i ? 'mb-0 lg:pb-32' : 'mb-32  border-b border-gray-40 lg:pb-56'}`}>
                            <div className='flex -mx-16 flex-wrap'>
                                <div className='w-full md:w-6/12 px-16'>
                                    <h3 className='text-28 font-muller font-medium mb-20 leading-none'>{info.title}</h3>
                                </div>
                                <div className='w-full md:w-6/12 px-16'>
                                    <div className='post post-type-2' dangerouslySetInnerHTML={{ __html: info.text }}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ({ fallback }) => (
    <SWRConfig value={{ fallback }}>
        <Layout meta={{ title: 'Shipping and Payment', description: 'Shipping and Payment Page' }}>
            <ShippingPaymentPage />
        </Layout>
    </SWRConfig>
)


export async function getStaticProps() {
    const delivery = await httpClient.get('/shop/delivery')

    return {
        props: {
            fallback: {
                '/shop/delivery': delivery,
            }
        },
    }
}
