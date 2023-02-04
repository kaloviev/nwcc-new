import Link from 'next/link';
import React from  'react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Layout from '../../components/Layouts/mainLayout';

const ResetPasswordPage = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Сбросить пароль'
        }
    ]
    return(
        <div className='container '>
            <Breadcrumb routes={breadcrumb}/>
            <div className='md:max-w-[466px] pb-40 mx-auto md:pt-96  md:pb-96 lg:pb-96 lg:min-h-[56vh]'>
                <h2 className='font-muller font-medium text-28 lg:mt-18  lg:text-36 md:mb-24'>Сбросить пароль</h2>

                <div className='pt-80 pb-112 md:pt-[11px] '>
                    <p className='font-ptsans text-14 mb-14'>Введите ваш номер телефона и мы вышлем на него новый пароль</p>
                    <form>
                        <Input label="Телефон" type="text" name="phoneNumber"/>
                        
                        <Button type="submit" style={'w-full'}>Сбросить пароль</Button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage;
ResetPasswordPage.getLayout = (page) => {
    return(
        <Layout meta={{title:'Reset Password Page', description:'Reset Password page'}}>
            {page}
        </Layout>
    )
}