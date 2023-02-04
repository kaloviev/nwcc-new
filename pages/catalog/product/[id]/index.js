import React from 'react'
import Layout from 'components/Layouts/mainLayout'
import Breadcrumb from 'components/Breadcrumb'
import ProductCarousel from 'components/Pages/Catalog/product/Carousel'
import ProductContent from 'components/Pages/Catalog/product/Content'

import SimilarProduct from 'components/Pages/Catalog/product/SimilarProduct'
import PolarChart from 'components/Pages/Catalog/product/PolarChart'
import Link from 'next/link'
import MethodCard from 'components/Pages/Catalog/product/MethodCard'

import httpClient from 'services/HttpClient';

const ProductPage = ({ product }) => {
    console.log(product)
    // const { data, isLoading, errro } = useSWR('/shop/product/' + router.query.id, url => httpClient.get(url))

    const isCoffee = product.evaluation

    const breadcrumb = [
        {
            name: 'СЗКК Магазин',
            url: '/'
        },
        {
            name: 'Каталог',
            url: '/catalog'
        },
        {
            name: product.title
        }
    ]

    const methods = [
        {
            title: 'Воронка Hario V60',
            description: [
                "17,5 г кофе",
                "275 г воды температурой 96℃",
                "Помол Mahlkönig Tanzania: 6,5",
                "Вливания:<br/> Предсмачивание: 40 г <br/> В 0:35 начать вливать оставшуюся воду, растянуть <br/> вливание до 1:40<br/>Общее время экстракции: 2:40 <br/> TDS=1,41%"
            ]

        },
        {
            title: 'Аэропресс',
            description: [
                "17,5 г кофе",
                "275 г воды температурой 96℃",
                "Помол Mahlkönig Tanzania: 6,5",
                "Вливания:<br/> Предсмачивание: 40 г <br/> В 0:35 начать вливать оставшуюся воду, растянуть <br/> вливание до 1:40<br/>Общее время экстракции: 2:40 <br/> TDS=1,41%"
            ]
        },
        {
            title: 'Эспрессо',
            description: [
                "17,5 г кофе",
                "275 г воды температурой 96℃",
                "Помол Mahlkönig Tanzania: 6,5",
                "Вливания:<br/> Предсмачивание: 40 г <br/> В 0:35 начать вливать оставшуюся воду, растянуть <br/> вливание до 1:40<br/>Общее время экстракции: 2:40 <br/> TDS=1,41%"
            ]
        }
    ]
    return (
        <>
            <div className='container'>
                <Breadcrumb routes={breadcrumb} />
                <div className='-mx-16 flex flex-wrap'>
                    <div className='w-full lg:w-6/12 exlg:w-4/12 xl:w-4/12 px-16'>
                        <ProductCarousel images={product.gallery} />
                    </div>
                    {/* /.w-full */}
                    <div className='w-full lg:w-6/12 exlg:w-8/12  xl:w-8/12 px-16'>
                        <ProductContent product={product} />

                        <div className='pt-32'>

                            <div className='flex flex-wrap -mx-16 mb-56'>
                                {product.taste_web &&
                                    <div className='w-full exlg:w-6/12 xl:w-7/12 px-16 mb-32'>
                                        <h3 className='font-muller font-bold'>Паутина вкуса</h3>
                                        <PolarChart product={product} />
                                    </div>
                                }
                                <div className={`w-full px-16 ${isCoffee ? 'exlg:w-6/12 xl:w-5/12' : ''}`}>
                                    <div className='bg-pattern-black py-28 px-28 mb-36 hidden lg:block'>
                                        <div className="font-muller font-bold text-14 text-white mb-10">[not found]</div>
                                        <div className='text-white font-ptsans text-14 max-w-[200px] mb-16'>[not found]</div>
                                        <div className='pb-36 exlg:pb-16'>
                                            <Link href={'/'} className="underline text-white text-14">[not found]</Link>
                                        </div>
                                    </div>
                                    {/* /.card */}
                                    <div className=''>
                                        <h3 className='font-muller font-bold text-18 mb-12'>Описание</h3>
                                        <div className='text-14 text-gray-80 leading-6 with-content' dangerouslySetInnerHTML={{ __html: product.text }}></div>
                                    </div>
                                </div>
                            </div>
                            {isCoffee &&
                                <div className='hidden lg:block lg:mb-96'>
                                    <h3 className='font-muller font-bold'>Способы заваривания</h3>
                                    <div className='bg-gray-0  p-24 overflow-auto'>
                                        <div className='-mx-10  flex '>
                                            {
                                                methods.map((method, i) => {
                                                    return (
                                                        <div key={i} className="px-10">
                                                            <MethodCard data={method} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <SimilarProduct products={product.related_products} />
        </>
    )
}

export default ProductPage;
ProductPage.getLayout = (page) => {
    return <Layout meta={{ title: '', description: '' }}>{page}</Layout>
}


// export async function getStaticPaths() {
//     return {
//       paths: [{ params: { id: 'id' } }],
//       fallback: true,
//     };
//   }

// export async function getStaticProps({ params }) {
//     const product = await httpClient.get(`/shop/product/${ params.id }`)

//     return {
//       props: {
//         product,
//       },
//     }
//   }

export async function getServerSideProps({ params }) {
    const product = await httpClient.get(`/shop/product/${params.id}`)

    return {
        props: {
            product,
        },
    }
}



/**
 * @typedef {Object} Product
 * @property {string} alias - The alias of the coffee product.
 * @property {number} arabica - The percentage of arabica in the coffee.
 * @property {number} archive - The archive status of the coffee.
 * @property {number} bitterness - The bitterness level of the coffee.
 * @property {string} brand - The brand name of the coffee.
 * @property {number[]} brewing - The brewing methods recommended for the coffee.
 * @property {boolean} cached - A boolean indicating if the coffee is cached.
 * @property {number} capping_param_enabled - A number indicating if capping parameters are enabled.
 * @property {number} capping_web_enabled - A number indicating if web capping is enabled.
 * @property {number} category - The category of the coffee.
 * @property {string} country - The country of origin for the coffee.
 * @property {string} description - A description of the coffee.
 * @property {number} discount_price - The discounted price of the coffee.
 * @property {Object} evaluation - An object containing the evaluation of the coffee.
 * @property {Object[]} gallery - An array of objects representing the coffee's gallery.
 * @property {number} General_sourness - The general sourness level of the coffee.
 * @property {boolean} has_arabica - A boolean indicating if the coffee contains arabica.
 * @property {boolean} has_robusta - A boolean indicating if the coffee contains robusta.
 * @property {number} height - The height of the coffee.
 * @property {number} id - The id of the coffee.
 * @property {number} is_popular - A number indicating if the coffee is popular.
 * @property {number} length - The length of the coffee.
 * @property {string} long_title - The long title of the coffee.
 * @property {number} menuindex - The menu index of the coffee.
 * @property {number} position_in_popular - The position of the coffee in the popular list.
 * @property {number} price - The price of the coffee.
 * @property {number} price_type - The price type of the coffee.
 * @property {string} product_card - The product card of the coffee.
 * @property {Object} related_products - An object containing related products.
 * @property {number} roasting - The roasting level of the coffee.
 * @property {string} sku - The sku of the coffee.
 * @property {number} sweetness - The sweetness level of the coffee.
 * @property {Object} taste_web - An object containing the taste profile for the coffee.
 * @property {string} text - The text describing the coffee.
 * @property {string} title - The title of the coffee.
 * @property {number} weight - The weight of the coffee.
 * @property {number} width - The width of the coffee.
*/
