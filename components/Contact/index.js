import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Textarea from '../Textarea';
import IconClose from '../../assets/images/icon-close-black.svg';
import Image from 'next/image';

const ContactNumber = ({children, inBottom}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [modalActive, setModalActive] = useState(false);
    const tabHeaders = [
        {
            title: 'Обратный звонок'
        },
        {
            title: 'Задать вопрос'
        }
    ]

    
    return(
        <div className='relative inline-block'>
            <div onClick={()=>setModalActive(!modalActive)}>{children}</div>
            <div className={`fixed lg:absolute 
                bottom-0
                top-0
                h-screen
                lg:h-auto
                ${inBottom?' bottom-0 top-auto lg:bottom-0  lg:mb-32 ': ' top-0 lg:top-100 lg:bottom-auto  lg:mt-32 '} 
                lg:min-w-[345px] 
                left-0 
                lg:left-auto 
                right-0  
                lg:-right-[32px] 
         
                shadow 
                lg:shadow-lg  
                bg-white 
                py-56 
                lg:py-30 
                px-16 
                lg:px-30 
                z-20 transition-all duration-300 ${modalActive?'visible opacity-100':'invisible opacity-0'}`}>
                <div className={`p-10 bg-white absolute inline-block absolute  right-[40px]  rotate-45 rounded-sm ${inBottom?'-bottom-4':'top-4'}`}></div>
                <div className='absolute right-16 top-20 cursor-pointer z-10' onClick={()=>setModalActive(false)}>
                    <Image src={IconClose} alt="close" className='w-[20px] h-[20px] lg:w-[16px] lg:h-[16px]'/>
                </div>
               <div className='flex items-center -mx-16'>
                    {tabHeaders.map((header,i)=>{
                        return  <div key={i} className={`text-14 font-ptsans px-16 cursor-pointer`} onClick={()=>setSelectedTab(i)}><span className={`${selectedTab === i?'border-b-2 border-gray-80 inline-block pb-2':''}`}>{header.title}</span></div>
                    })}
                   
               </div>

               <div className='py-28'>
                {
                    selectedTab === 0 &&
                    <div>
                        <form>
                            <Input name='telephone' label="Телефон"/>
                            <Input name='name' label="Имя"/>
                            <Button style="w-full">Отправить сообщение</Button>
                        </form>
                    </div>
                }
                {
                    selectedTab === 1 &&
                
                    <div>
                        <form>
                            <Input name='telephone' label="Телефон"/>
                            <Input name='name' label="Имя"/>
                            <Textarea name="question" label="Ваш вопрос"/>
                            <Button style="w-full">Отправить сообщение</Button>
                        </form>
                    </div>
                }
                   
               </div>
            </div>
        </div>
    )
}
export default ContactNumber;