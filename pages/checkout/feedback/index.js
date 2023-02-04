import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import Layout from '../../../components/Layouts/mainLayout';
import DogIcon from '../../../assets/images/dog2.svg';
import Image from 'next/image';
import Button from '../../../components/Button';
const FeedbackPage = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Корзина',
        },
      
    ]
    return(
        <div className='container'>
            <div className=''>
                <Breadcrumb routes={breadcrumb}/>

                <div className='text-center flex flex-col items-center pt-80 pb-80 lg:pt-144 lg:pb-144'>
                    <Image src={DogIcon} alt="Dog"/>
                    <div className='text-center pt-30'>
                        <h2 className='font-kazimir text-36 lg:text-42 mb-10'>Спасибо за покупку!</h2>
                        <p className='mb-16 text-14 lg:text'>
                        Ваш заказ успешно сформирован.<br/>
                        Детали заказа отправлены вам на почту.
                        </p>
                        <p className='mb-24  text-14 lg:text'>
                        Если вы зарегистрировались, отслеживать статус заказа возможно <br/>
                        в личном кабинете.
                        </p>
                        <div className="flex justify-center">
                            <Button>Продолжить покупки</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackPage;

FeedbackPage.getLayout = (page)=>{
    return(
        <Layout meta={{title:"Feedback page", description:"Feedback Description Page"}}>{page}</Layout>
    )
}