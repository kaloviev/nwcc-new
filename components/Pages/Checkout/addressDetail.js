import React from 'react';
import ContactNumber from '../../Contact';

const AddressDetail = () => {
    return(
        <div className='p-16 xl:p-40'>
            <div className='font-ptsans text-14 text-gray-60 leading-snug'>
                Если возникли вопросы по оформлению заказа, звоните нам в офис или напишите на почту:<br/>
                <ContactNumber><span className='cursor-pointer underline'>+7 (812) 644-87-90</span> </ContactNumber> (пн-пт 10:00-18:00)<br/>
                <a href="mailto:info@nwcc.ru" className='underline'>info@nwcc.ru</a>
            </div>
        </div>
    )
}

export default AddressDetail;