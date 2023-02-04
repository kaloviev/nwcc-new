import Image from 'next/image';
import React from 'react';
import Counter from '../../Counter';
import Select from '../../Select';

const CartItem = ({item}) => {
    return(
        <div className='flex lg:items-center'>
            <div className='max-w-[80px] sm:max-w-[120px] exlg:max-w-[104px] w-full mr-10'>
                <Image src={item.image} alt={item.name}/>
            </div>
            <div className='w-full'>
                <div className='lg:flex lg:items-center w-full'>
                    <h3 className='font-kazimir text-18 italic mb-4 lg:mb-0 lg:max-w-[200px] exlg:max-w-[220px] xl:max-w-[300px] w-full'>{item.name}</h3>
                    <div className='lg:max-w-[200px] xl:max-w-[270px] w-full'>
                        <div className='flex items-center -mx-4 -mb-10 lg:-mb-20'>
                            <div className='px-4 w-5/12'>
                                <Select  name="type" options={[{key:'250r', value:'250r'}, {key:'260r', value:'260r'}]} selected=""/>
                            </div>
                            <div className='px-4 w-7/12'>
                                <Select name="type" options={[{key:'250r', value:'250r'}, {key:'260r', value:'260r'}]} selected=""/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='lg:ml-16 exlg:px-20 xl:px-60'>
                            <Counter/>
                        </div>
                        <div className='font-kazimir text leading-0 lg:ml-auto'>
                            {item.price} ₽
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;