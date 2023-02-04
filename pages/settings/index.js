import React from 'react';
import Layout2 from '../../components/Layouts/layout2';

import SettingForm from '../../components/Pages/Settings/Form';
import DeliveryAddress from '../../components/Pages/Settings/DeliveryAddress';
const breadcrumb = [
    {
        name:'СЗКК Магазин',
        url:'/'
    },
    {
        name:'Личный кабинет'
    }
]
const SettingPage = () => {
    return(
        <div className='container py-40 lg:pt-20'>
            <div className='-mx-16 exlg:-mx-32 flex flex-wrap justify-between'>
                <div className='px-16 exlg:px-32 w-full exlg:w-8/12'>
                    <SettingForm/>
                </div>
                <div className='px-16 exlg:px-32 w-full exlg:w-4/12'>
                    <DeliveryAddress/>
                </div>
            </div>
        </div>
    )
}
export default SettingPage;
SettingPage.getLayout  = (page)=>{
    return(
        <Layout2 title="Личный кабинет" meta={{title:'', description:''}} breadcrumb={breadcrumb} page="settings">{page}</Layout2>
    )
}