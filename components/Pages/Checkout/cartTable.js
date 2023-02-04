import React from 'react';
import CartItem from './cartItem';
import Button from '../../Button';

const CartTable = ({cartItems}) => {
    return(
        <div>
            <div className=' mb-40'>
                {cartItems.map((cartItem,i)=> {
                    return(
                        <div key={i} className={`border-t border-gray-40 py-16 ${cartItems.length - 1 === i?'border-b':''}`}>
                            <CartItem item={cartItem}/>
                        </div>
                    )
                })}
                
                {/* /.cart-table */}
            </div>
            
        </div>
    )
}

export default CartTable;