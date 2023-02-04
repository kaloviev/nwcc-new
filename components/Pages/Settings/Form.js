import React from 'react';
import Input from '../../Input';
import Button from '../../Button';

const SettingForm = () => {
    return(
        <div className='mb-96'>
            <form>
                <div className='-mx-16 md:-mx-24 lg:-mx-32 flex flex-wrap justify-center'>
                
                    <div className='w-full md:w-6/12 px-16 md:px-24 lg:px-32 mb-32 md:mb-0'>
                        <h3 className='font-muller font-medium text-20 mb-20'>Персональные данные</h3>

                        <Input type={'text'} name={'name'} label="Имя"/>

                        <Input type={'email'} name={'email'} label="Email"/>

                        <Input type={'text'} name={'telephone'} label="Телефон"/>
                    </div>
                    
                    <div className='w-full md:w-6/12 px-16 md:px-24  lg:px-32'>
                        <h3 className='font-muller font-medium text-20  mb-20'>Безопасность</h3>

                        <Input type={'text'} name={'name'} label="Текущий пароль"/>

                        <Input type={'email'} name={'email'} label="Новый пароль"/>

                        <Input type={'text'} name={'telephone'} label="Повторите новый пароль"/>
                    </div>

                    <div className='w-full lg:w-7/12 px-16 md:px-24  lg:px-32 lg:pt-32'>
                        <Button style={'w-full'}>Сохранить изменения</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SettingForm;