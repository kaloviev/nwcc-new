import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const PolarChart  = ({product}) => {
    // const data = [
    //     {
    //       subject: "Послевкусие",
    //       amount: 90

    //     },
    //     {
    //         subject: "Сладкий",
    //         amount: 10

    //       },
    //       {
    //         subject: "Сладкий",
    //         amount: 100

    //       },
    //       {
    //         subject: "Кислотный",
    //         amount: 30

    //       },
    //       {
    //         subject: "Тело",
    //         amount: 60

    //       },
    //       {
    //         subject: "Цветочный",
    //         amount: 20

    //       },
    //       {
    //         subject: "Чистый",
    //         amount: 70

    //       },
    //       {
    //         subject: "Пряный",
    //         amount: 75

    //       },
    //       {
    //         subject: "Горький",
    //         amount: 110

    //       },
    //       {
    //         subject: "Солёный",
    //         amount: 15

    //       },
    //       {
    //         subject: "Карамельный",
    //         amount: 65

    //       },
    //       {
    //         subject: "Ягодный",
    //         amount: 45

    //       },
    //       {
    //         subject: "Шоколадный",
    //         amount: 90

    //       },
    //       {
    //         subject: "Косточковый",
    //         amount: 80

    //       },
    //       {
    //         subject: "Цитрусовый",
    //         amount: 55

    //       },

    //   ];

    const data = [
        { name: 'Горький', x: product.taste_web.bitter },
        { name: 'Карамельный', x: product.taste_web.caramel },
        { name: 'Кислотный', x: product.taste_web.sour },
        { name: 'Косточковый', x: product.taste_web.drupaceous },
        { name: 'Послевкусие', x: product.taste_web.aftertaste },
        { name: 'Пряный', x: product.taste_web.spicy },
        { name: 'Сладкий', x: product.taste_web.sweet },
        { name: 'Солёный', x: product.taste_web.salty },
        { name: 'Тело', x: product.taste_web.body },
        { name: 'Цветочный', x: product.taste_web.floral },
        { name: 'Цитрусовый', x: product.taste_web.citrus },
        { name: 'Чистый', x: product.taste_web.clear },
        { name: 'Шоколадный', x: product.taste_web.chocolate },
        { name: 'Ягодный', x: product.taste_web.berry },
    ];
    return(
        <div className='h-[274px]  lg:h-[372px] exlg:h-[400px]'>
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart  innerRadius={40} className="h-[274px] w-[374px] lg:h-[372px] lg:w-[472px] exlg:h-[400px]"
            outerRadius="80%" data={data}>
            <PolarGrid  gridType='circle'/>
            <PolarAngleAxis dataKey="name" tick={{ fontSize: 11 }} />
            {/* <PolarRadiusAxis /> */}
            <Radar dataKey="x" stroke="#000"
                fill="green" dot="true" activeDot="true" fillOpacity={0} />
        </RadarChart>
        </ResponsiveContainer>
      </div>
    )
}

export default PolarChart;
