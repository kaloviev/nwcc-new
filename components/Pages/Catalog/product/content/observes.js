import Image from 'next/image';
import React from 'react';
import AngleDownIcon from '../../../../../assets/images/icon-angle-down.svg';
import ProgressRangeDot from '../../../../ProgressRangeDot';
import Scale from '../../../../Scale';
import ProgressBar from '../../../../ProgressBar';

const ProductObserves = ({ product }) => {
    const totalPercent =
        product.evaluation.aroma +
        product.evaluation.bouquet +
        product.evaluation.aftertaste +
        (product.evaluation.sourness * 2) +
        (product.evaluation.body * 2) +
        (product.evaluation.balance * 2) +
        product.evaluation.total_evaluation

    return(
        <div>
            <div className='text-20 font-muller font-bold text-gray-80 flex items-center mb-36'>
                Каппинг
                <Image src={AngleDownIcon} alt="Angle Down" width={14} className="ml-12"/>
            </div>
            <div className='flex flex-wrap -mx-16'>
                <div className='px-16 w-full exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Аромат" min={6} max={10} value={product.evaluation.aroma}/>
                    </div>
                </div>

                <div className='px-16 w-full exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Послевкусие" min={6} max={10} value={product.evaluation.aftertaste}/>
                    </div>
                </div>
                <div className='px-16 w-full exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Букет" min={6} max={10} value={product.evaluation.bouquet}/>
                    </div>
                </div>

                <div className='px-16 w-full exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Баланс" min={6} max={10} value={product.evaluation.balance}/>
                    </div>
                </div>

                <div className='px-16 w-full exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Кислотность" min={6} max={10} value={product.evaluation.sourness}/>
                        <div className='pt-32'>
                            <ProgressBar percent={product.evaluation.sourness_intensity / 10 * 100} />
                            <div className='text-12'>Интенсивность</div>
                        </div>
                    </div>
                </div>
                <div className='px-16 w-full exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Тело" min={6} max={10} value={product.evaluation.body}/>
                        <div className='pt-32'>
                            <ProgressBar percent={product.evaluation.body / 10 * 100} />
                            <div className='text-12'>Интенсивность</div>
                        </div>
                    </div>
                </div>


                <div className='px-16 w-full  exlg:w-6/12'>
                    <div className='mb-56'>
                        <ProgressRangeDot label="Общее впечатление" min={6} max={10} value={product.evaluation.total_evaluation}/>

                    </div>
                </div>

                <div className='px-16 w-full  exlg:w-6/12'>
                    <div className='mb-56 font-ptsans text-14'>
                        Кислотность, тело и баланс — важнейшие критерии оценки вкуса, поэтому их значение умножается на 2.
                    </div>
                </div>



                <div className='px-16 w-full '>
                    <div className='mb-24'>
                        <div className='text-14 font-ptsans'>Итоговая оценка качества</div>
                        <Scale number={totalPercent}/>
                        <div className='flex items-center justify-between text-12 font-ptsans'>
                            <div>Неважный кофе</div>
                            <div>Недостижимый идеал</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductObserves;
