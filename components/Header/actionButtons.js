import Image from 'next/image';
import React, { useContext } from 'react';

import WishIcon from '../../assets/images/icon-heart.svg';
import UserIcon from '../../assets/images/icon-user.svg';
import CartIcon from '../../assets/images/icon-cart.svg';
import { CartContext } from 'contexts/Cart';

const ActionButtons = () => {
    const { productIDs } = useContext(CartContext)
    const length = Object.keys(productIDs).length

    return(
        <div className='flex items-center'>
            {/* <div className='px-6 cursor-pointer'>
                <Image src={WishIcon} alt="Wish" width={16}/>
            </div>
            <div className='px-6  cursor-pointer'>
                <Image src={UserIcon} alt="User" width={16}/>
            </div> */}
            <div className='px-6 flex items-center  cursor-pointer'>
                <Image src={CartIcon} alt="Cart" className='mr-6' width={28}/>
                {length > 0 && <span className='font-ptsans text-14'>{ length }</span>}
            </div>
        </div>
    )
}

export default ActionButtons;
