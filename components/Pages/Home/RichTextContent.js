import React from 'react';
import Button from '../../Button';

const RichTextContent = () => {
    const lists = [
        {
            title:'Свежая обжарка',
            items:(
            <ul>
                <li>Эспрессо, фильтр, капсулы</li>
                <li>Оптовые и розничные поставки Private Label</li>
                <li>Читать подробнее на сайте</li>
            </ul>
            )
        },
        {
            title:'Обучение',
            items:(
            <ul>
                <li>Школа Бариста</li>
                <li>SPb School of Coffee</li>
                <li><a href="#">Читать подробнее на сайте</a></li>
            </ul>
            )
        },
        {
            title:'Консалтинг',
            items:(
            <ul>
                <li>Открытие кофеен</li>
                <li>Организация кофейных зон</li>
                <li>Подбор оборудования и зерна</li>
            </ul>
            )
        },
        {
            title:'Культура и бизнес',
            items:(
            <ul>
                <li>Организация каппингов,чемпионатов</li>
                <li>Выездная кофейняа</li>
            
            </ul>
            )

        },
        {
            title:'Оборудование',
            items:(
            <ul>
                <li>Дистрибьютеры Diedrich</li>
                <li>Ремотная и сервисная служба</li>
                <li><a href="#">Читать подробнее на сайте</a></li>
            </ul>
            )
        },
        
    ]
    return(
        <div className='py-40 lg:py-112'>
            <div className="container lg:px-32">
                <div className='flex flex-wrap -mx-16 lg:-mx-32 lg:pb-76'>
                    <div className="w-full exlg:w-4/12 xl:w-3/12 px-16 lg:px-32">
                        <div className='post mb-32'>
                            <h2>Что мы делаем</h2>
                            <h4>Полный цикл: от идеи до ваших успешных продаж</h4>
                            <p>
                                По вашему запросу мы разработаем для вас меню с кофейными напитками, рассчитаем себестоимость, продумаем концепцию кофе-корнера, обжарим кофе и привезем его вам, предложим и поставим необходимое для вас оборудование, обучим ваш персонал и наладим систему контроля качества.
                            </p>
                            <p>
                                Мы сделаем все для того, чтобы вы повысили свои продажи кофе.
                            </p>
                        </div>
                    </div>
                    {/* /.w-full */}
                    <div className='w-full exlg:w-8/12 xl:w-9/12 px-16 exlg:pt-76 lg:px-32'>
                        <div className="flex flex-wrap -mx-16 lg:-mx-32">
                            {
                                lists.map((list,i)=>{
                                    return (
                                        <div className="w-6/12 lg:w-4/12 px-16 lg:px-32" key={i}>
                                            <div className='post'>
                                                <h3>
                                                    {list.title}
                                                </h3>
                                                <div>
                                                    {list.items}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                    {/* /.w-full */}
                </div>
                {/* /.flex */}
                <div className='flex lg:justify-center'>
                    <Button  style="w-full lg:w-auto">Перейти на сайт</Button>
                </div>
            </div>
        </div>
    )
}

export default RichTextContent;