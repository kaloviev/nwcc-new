import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1_sm  from '../../../assets/images/home-banner-image-sm.png';
import Image1_lg  from '../../../assets/images/home-banner-image-lg.png';
import ProgressBar from '../../ProgressBar';
import Button from '../../Button';
import CircularProgress from '../../CircularProgress';


  var timer;
const HomeBanner = ({ brands }) => {
    // console.log(brands)
    var i = 0;
    const [items, setItems ] = useState([
        {
            title:'Ethiopia Gedeb',
            subTitle:'Мытый',
            description:'Лимитированная линейка моносортов кофе класса «Speciality». Это зерно мы находим в самых экзотических уголках нашей планеты.',
            images:[Image1_sm, Image1_lg ],
            contents:[
                {
                    name:'Обжарка',
                    quantity:20
                },
                {
                    name:'Кислотность',
                    quantity:85
                },
                {
                    name:'Сладость',
                    quantity:70
                },
                {
                    name:'Горечь',
                    quantity:50
                }
            ],
            itemIndex: '250 г',
            price:'700 ₽'

        },
        {
            title:'Ethiopia Gedeb',
            subTitle:'Мытый',
            description:'Лимитированная линейка моносортов кофе класса «Speciality». Это зерно мы находим в самых экзотических уголках нашей планеты.',
            images:[Image1_sm, Image1_lg ],
            contents:[
                {
                    name:'Обжарка',
                    quantity:20
                },
                {
                    name:'Кислотность',
                    quantity:85
                },
                {
                    name:'Сладость',
                    quantity:70
                },
                {
                    name:'Горечь',
                    quantity:50
                }
            ],
            itemIndex: '250 г',
            price:'700 ₽'

        },
        {
            title:'Ethiopia Gedeb',
            subTitle:'Мытый',
            description:'Лимитированная линейка моносортов кофе класса «Speciality». Это зерно мы находим в самых экзотических уголках нашей планеты.',
            images:[Image1_sm, Image1_lg ],
            contents:[
                {
                    name:'Обжарка',
                    quantity:20,
                },
                {
                    name:'Кислотность',
                    quantity:85,
                },
                {
                    name:'Сладость',
                    quantity:70,
                },
                {
                    name:'Горечь',
                    quantity:50,
                }
            ],
            itemIndex: '250 г',
            price:'700 ₽'

        },
        {
            title:'Ethiopia Gedeb',
            subTitle:'Мытый',
            description:'Лимитированная линейка моносортов кофе класса «Speciality». Это зерно мы находим в самых экзотических уголках нашей планеты.',
            images:[Image1_sm, Image1_lg ],
            contents:[
                {
                    name:'Обжарка',
                    quantity:20,
                },
                {
                    name:'Кислотность',
                    quantity:85,
                },
                {
                    name:'Сладость',
                    quantity:70,
                },
                {
                    name:'Горечь',
                    quantity:50,
                }
            ],
            itemIndex: '250 г',
            price:'700 ₽'

        }
    ]);
    const [percent, setPercent]= useState([...Array(items.length)].map(item=>0));
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const settings = {
        dots: false,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 11000,
        pauseOnHover:false,
        beforeChange: (current, next) => initializeTimer(current, next, items.length),

      };
    useEffect(()=>{
        initializeTimer(0, 0, items.length);

       return()=>{
        clearInterval(timer);
       }
    },[])

    const initializeTimer = (current, next, total) => {
        // console.log(next);
        clearInterval(timer);
        setPercent([...Array(total)].map(item=>0))


       i = 1;
       timer =  setInterval(()=>{

        percent[current] = 0;
        percent[next]= i * 10;
        setPercent([...percent]);
        i=i+1;

       }, 1000);
    }



    return (
        <section className='pb-40'>
            <div className='container relative'>
                <div className='text-gray-60 font-ptsans text-14 mb-16'>СЗКК Магазин</div>
                <div className='mb-40'>
                    <Slider {...settings}>
                    {
                        brands && brands.map((brand,i)=>{
                            return (
                                <div className='item' key={i}>
                                    <div className='flex flex-wrap lg:flex-row-reverse justify-between'>
                                        <div className='mb-30 flex justify-center w-full lg:w-6/12 lg:mb-0'>
                                        <Image
                                            // src={items[i].images[1]}
                                            src={brand.image.images_new.default}
                                            width={309}
                                            height={321}
                                            className="max-w-full"
                                            loading="eager"
                                            alt={brand.title}
                                            style={{objectFit:'cover'}}
                                        />
                                        </div>

                                        <div className='w-full lg:w-6/12 xl:w-5/12'>
                                            <div className="lg:pt-80 w-full flex flex-col h-full">
                                                <div className="lg:pb-40">
                                                    <h2 className='text-32 xl:text-46 text-gray-80 font-kazimir'>{brand.title}</h2>
                                                    {/* <div className='text-gray-40 text-14 xl:text-16 mb-10'>Мытый</div> */}
                                                    <div className='text-gray-40 text-14 xl:text-[15px] mb-20 max-w-[357px] xl:max-w-[357px] lg:mb-24' dangerouslySetInnerHTML={{ __html: brand.text }}></div>
                                                    <div className="flex flex-wrap -mx-10 xl:max-w-[465px]">
                                                        {items[i].contents.map((content,i)=>{
                                                            return(
                                                                <div className='w-6/12 lg:w-3/12 px-10' key={i}>
                                                                    <div className='mb-24'>
                                                                        <div className='font-ptsans text-14 text-gray-60 mb-2'>{content.name}</div>
                                                                        <ProgressBar percent={content.quantity}/>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>
                                                    <div className='font-muller text-gray-60 text-14 mb-6'>
                                                        {brand.brand_weight}
                                                    </div>
                                                </div>
                                                <div className='lg:mt-auto'>
                                                    <div className='font-kazimir text-gray-80 text-30 mb-6 lg:mb-10'>
                                                        {items[i].price}
                                                    </div>
                                                    <div className='lg:max-w-[266px]'>
                                                        <Button style="w-full">Купить</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.flex */}
                                </div>
                            )
                        })
                    }
                    </Slider>

                </div>
                <div className='dots flex items-center justify-center lg:absolute lg:right-0 lg:bottom-14'>
                        {
                            [...Array(items.length)].map((list,i)=>{
                                return (
                                        <div  key={i} className="px-4">
                                            <div className="p-16 relative">
                                                <div className="absolute inset-0">

                                                    <CircularProgress percentage={percent[i]} text={i+1}/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            })
                        }

                </div>
                    {/* /.item */}
            </div>
        </section>
    )
}

export default HomeBanner;
