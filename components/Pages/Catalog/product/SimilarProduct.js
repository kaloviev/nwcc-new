import React from 'react';
import ProductItem from '../../../ProductItem';
import ProductData from '../../../../fakeData/products.json';

const SimilarProduct = ({ products }) => {
    return(
        <div className=''>
            <div className='container'>
                <h3 className='font-kazimir text-32 mb-40 text-left lg:text-center'>С этим товаром приобретают</h3>
            </div>
            <div className='overflow-auto'>
                <div className='flex'>
            {
                    Object.values(products).map((product,i)=>{
                        console.log(product)
                        return(
                            <div className={`w-full max-w-[255px] lg:max-w-[460px]`} key={i}>
                                <ProductItem product={product} data={ProductData[0]} type={'grid'} hoverAction={false}/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default SimilarProduct;
