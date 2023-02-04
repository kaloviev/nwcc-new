import Link from 'next/link';
import React, { useState } from  'react';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import Layout from '../../components/Layouts/mainLayout';

const RegisterPage = () => {
    const breadcrumb = [
        {
            name:'СЗКК Магазин',
            url:'/'
        },
        {
            name:'Регистрация'
        }
    ]
    const [formData, setFormData] = useState({
        terms:false,
    })

    const handleInputChange = (e) => {
        let value = e.target.value;
        if(e.target.name === 'terms'){
            value = e.target.checked
        }
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }   
    return(
        <div className='container '>
            <Breadcrumb routes={breadcrumb}/>
            <div className='md:max-w-[466px] mx-auto md:pt-80  md:pb-80 lg:pb-96'>
                <h2 className='font-muller font-medium text-28 lg:mt-18  lg:text-36 md:mb-24'>Регистрация</h2>

                <div className='pt-80 pb-56 md:pt-0 '>
                    <form>
                        <Input label="Номер телефона" type="text" name="phoneNumber"/>
                        <p className=" text-14 font-ptsans -top-16 inline-block relative">На указанный номер придёт пароль для входа</p>
                        {/* name, children, id, isChecked, action, checkboxStyle */}
                        <Checkbox name="terms" id="terms" value={formData.terms} isChecked={formData.terms} action={handleInputChange} checkboxStyle="">
                            Мною прочитаны, поняты и приняты Правила обработки персональных данных и Правила оплаты и доставки
                        </Checkbox>
                        <Button type="submit" style={'w-full'}>Зарегистрироваться</Button>
                        <div className='mt-16 mb-16 border-t border-gray-20'></div>
                        <Button type="button" variant="primary" style={'w-full'}>Есть аккаунт? Войти</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
RegisterPage.getLayout = (page) => {
    return(
        <Layout meta={{title:'Register Page', description:'Register page'}}>
            {page}
        </Layout>
    )
}