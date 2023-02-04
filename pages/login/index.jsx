import Link from 'next/link';
import React from  'react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Layout from '../../components/Layouts/mainLayout';

const LoginPage = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Вход'
        }
    ]
    return(
        <div className='container '>
            <Breadcrumb routes={breadcrumb}/>
            <div className='md:max-w-[466px] mx-auto md:pt-80  md:pb-80 lg:pb-96'>
                <h2 className='font-kazimir text-28 lg:mt-18  lg:text-36 md:mb-24'>Вход</h2>

                <div className='pt-80 pb-56 md:pt-0 '>
                    <form>
                        <Input label="Номер телефона" type="text" name="phoneNumber"/>
                        <Input label="Пароль" type="password" name="phoneNumber"/>
                        <Link href="/" className="underline text-14 font-ptsans -top-20 inline-block relative">Забыли пароль?</Link>
                        <Button type="submit" style={'w-full'}>Войти</Button>
                        <div className='mt-16 mb-16 border-t border-gray-20'></div>
                        <Button type="button" variant="primary" style={'w-full'}>Нет аккаунта? Зарегистрируйтесь</Button>
                        <div className='pt-16 font-ptsans text-center text-14 max-w-[310px] mx-auto'>
                            Аккаунт предоставляет доступ к истории заказов и возможность их повтора
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
LoginPage.getLayout = (page) => {
    return(
        <Layout meta={{title:'Login Page', description:'Login page'}}>
            {page}
        </Layout>
    )
}