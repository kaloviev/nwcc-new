import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';
const ProductCarousel = ({ images }) => {
    // console.log(images);
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 11000,
        pauseOnHover: false,
        focusOnSelect: true,
        // beforeChange: (current, next) => initializeTimer(current, next, items.length),

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            },
        ]

    };

    // const items = [
    //     {
    //         image: '/images/product-image-1.jpg',
    //         title:'title1'
    //     },
    //     {
    //         image: '/images/product-image-2.jpg',
    //         title:'title2'
    //     },
    //     {
    //         image: '/images/product-image-3.jpg',
    //         title:'title3'
    //     }
    // ]

    return (
        <div className='product-carousel'>
            <Slider {...settings} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                {images && images.map(({ alt, images_new }, i) => {
                    return (
                        <div className='item flex items-center justify-center' key={i}>

                            <Image
                                src={images_new.default}
                                className="max-w-full mx-auto"
                                loading="eager"
                                alt={alt}
                                width={540}
                                height={540}

                                style={{ objectFit: 'cover' }}
                            />

                        </div>
                    )
                })}
            </Slider>

            {images.length > 1 &&
                <div className="hidden md:block">
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        variableWidth={true}
                        className="slick-nav-for"

                    >

                        {images.map(({ alt, images_new }, i) =>
                            <div>
                                <div className='cursor-pointer  w-[60px] h-[60px] exlg:w-[100px] exlg:h-[100px] relative'>
                                    <Image src={images_new.default} alt={alt} fill className="max-w-full object-cover object-center block" />
                                </div>
                            </div>
                        )}

                        {/* <div>
                        <div className='cursor-pointer  w-[60px] h-[60px] exlg:w-[100px] exlg:h-[100px] relative'>
                            <Image src={items[0].image} alt={items[0].title} fill className="max-w-full object-cover object-center block"/>
                        </div>
                    </div>
                    <div>
                        <div className='cursor-pointer w-[60px] h-[60px] exlg:w-[100px] exlg:h-[100px]  relative'>
                            <Image src={items[1].image} alt={items[1].title} fill className="max-w-full object-cover object-center  block"/>
                        </div>
                    </div>
                    <div>
                        <div className='cursor-pointer w-[60px] h-[60px] exlg:w-[100px] exlg:h-[100px]  relative'>
                            <Image src={items[2].image} alt={items[2].title} fill className="max-w-full object-cover object-center  block"/>
                        </div>
                    </div> */}



                    </Slider>
                </div>}
        </div>
    )
}
export default ProductCarousel;
