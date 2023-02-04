import React from 'react';
import ProductSpecifications from './content/specifications';
import CartForm from './content/cartForm';
import ProductObserves from './content/observes';

const ProductContent = ({ product }) => {
    return(
        <div className='pt-56'>
             <h2 className='font-kazimir text-36 italic mb-14'>{product.title}</h2>
             <div className='-mx-16 flex flex-wrap exlg:justify-between mb-36'>
                <div className='px-16 w-full exlg:w-5/12'>
                    <ProductSpecifications product={product}/>
                </div>
                <div className='px-16 w-full exlg:w-6/12 xl:w-5/12'>
                    <CartForm product={product}/>
                </div>
             </div>
             <div>
             {product.evaluation &&
                <ProductObserves product={product}/>
            }
             </div>
        </div>
    )
}
export default ProductContent;
