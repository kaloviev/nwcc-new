import React, { useContext } from  'react';
import ShopContext from 'contexts/Shop'

import ProductImage1 from '../../../assets/images/product-image-lg.jpg';
import ProductImage2 from '../../../assets/images/product-image-2-lg.jpg';
import ProductImage3 from '../../../assets/images/product-image-3-lg.jpg';
import ProductImage4 from '../../../assets/images/product-image-4-lg.jpg';
import ProductImage5 from '../../../assets/images/product-image-5-lg.jpg';
import ProductImage6 from '../../../assets/images/product-image-6-lg.jpg';
import Link from 'next/link';
import Image from 'next/image';

const ProductGrid = () => {
    const shop = useContext(ShopContext)
    const products = [
        {
            name:'Фильтр',
            image: ProductImage1
        },
        {
            name:'Эспрессо',
            image: ProductImage2
        },
        {
            name:'Капсулы',
            image: ProductImage3
        },
        {
            name:'Дрипы',
            image: ProductImage4
        },
        {
            name:'Аксессуары',
            image: ProductImage5
        },
        {
            name:'Чистящие средства',
            image: ProductImage6
        }

    ]
    return(
        <section className=''>
            <div className="flex flex-wrap  home-product-grid">
                {shop.categories.map(({ title, id },i)=>{
                    return (
                        <div key={i} className='w-6/12 lg:w-4/12 home-product-grid-col'>
                            <Link href={`/catalog?category=${id}`} className='block home-product-grid-item relative h-full overflow-hidden group'>
                                <Image src={products[i].image} alt={title} fill={false} style={{objectFit:'cover'}} className="w-full h-full group-hover:scale-125 transition-all duration-1000"/>
                                <span className='absolute inset-0 h-full w-full bg-black opacity-30'></span>
                                <span className='absolute top-12 left-12 lg:top-18 lg:left-18 xl:top-24 xl:left-24 text-white font-kazimir font-medium text-16 lg:text-20 xl:text-26 z-10'>{title}</span>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProductGrid;
