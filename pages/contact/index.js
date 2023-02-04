import ContactsContext from 'contexts/Contacts'
import { useContext } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import ContactNumber from '../../components/Contact';
import Layout from '../../components/Layouts/mainLayout';

// const  ReactMap = dynamic(() => import('./map'), { ssr: false });
import ReactMap from './map'

const ContactPage = () => {
    const contacts = useContext(ContactsContext)

    const breadcrumb = [
        {
            name: 'СЗКК Магазин',
            url: '/'
        },
        {
            name: 'Контакты'
        }
    ]

    return (
        <div className='container'>
            <Breadcrumb routes={breadcrumb} />
            <h2 className='font-kazimir text-28  lg:mt-18 lg:text-36'>{contacts?.title}</h2>

            {contacts && contacts.offices?.map(({ map, work_mode, phone }, i) =>
                <div className='pt-80 md:pb-80 lg:pb-112' key={i}>
                    <div className='flex flex-wrap -mx-16'>
                        <div className="w-full md:w-5/12 lg:w-3/12 xxl:w-2/12 px-16">
                            <div className='mb-18'>
                                <h4 className='text-20 font-bold font-muller'>{map.city}</h4>
                                <p className='font-ptsans text-14'>Основной офис</p>
                            </div>
                        </div>

                        <div className="w-full  md:w-7/12 lg:w-3/12 px-16">
                            <div className='font-ptsans text-14 mb-18'>
                                <p className='mb-18'>{`${map.street}, ${map.housenumber}, ${map.city}, ${map.zipcode}`}</p>
                                <p className='mb-18'>{work_mode}</p>
                                <div>
                                    <ContactNumber><span>{phone}</span></ContactNumber>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 md:px-16 lg:ml-auto" style={{ minHeight: "420px" }}>
                            <ReactMap zoom={15} lat={+map.latitude} lng={+map.longitude} />
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
export default ContactPage;

ContactPage.getLayout = (page)=> {
    return(
        <Layout meta={{title:'Contact us', description:'Contact Page'}}>
            {page}
        </Layout>
    )
}
