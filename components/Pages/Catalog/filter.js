import React, { useState } from 'react';
import SlideInModal from '../../SlideInModal';
import Accordion from '../../Accordion';
import CheckboxComponent from '../../Checkbox';
import RadioComponent from '../../Radio';
import Button from '../../Button';

const Filter = ({open, onClose}) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedFilters2, setSelectedFilters2] = useState([]);
    const [selectedFilters3, setSelectedFilters3] = useState([]);
    const [selectedFilters4, setSelectedFilters4] = useState([]);
    const [selectedFilters6, setSelectedFilters6] = useState('Популярность');
    const filterItem1 = [
        {
            key: 'Filter Item 1',
            value: "Filter Item 1"
        },
        {
            key: 'Filter Item 2',
            value: 'Filter Item 2'
        },
        {
            key: 'Filter Item 3',
            value: 'Filter Item 3'
        }
    ]
    const filterItem2 = [
        {
            name:'Бразилия',
            quantity: 14
        },
        {
            name:'Бурунди',
            quantity:2
        },
        {
            name:'Вьетнам',
            quantity:'3'
        },
        {
            name:'Гондурас',
            quantity:'3'
        },
        {
            name:'Колумбия',
            quantity:'1'
        },
        {
            name:'Коста Рика',
            quantity:'10'
        },
        {
            name:'Мексика',
            quantity:'1'
        },
        {
            name:'Перу',
            quantity:'1'
        },

        {
            name:'Танзания',
            quantity:'2'
        },
        {
            name:'Эфиопия',
            quantity:'5'
        }
    ]
    const filterItem3 = [
        {
            name:'скидка',
            quantity: 14
        },
        {
            name:'понижение',
            quantity:2
        },
        
    ]
    const filterItem4 = [
        {
            name:'Новинки',
            quantity: 3
        },
        {
            name:'Популярное',
            quantity:6
        },
        {
            name:'Скидка',
            quantity:2
        }
    ]
    const filterItem6 = ['Популярность','Сначала дороже','Сначала дешевле' ];

    
    

    const setFilterAction = (filter) => {
        
            if(selectedFilters.length > 0){
                const index = selectedFilters.findIndex(fi=>fi === filter.key);
                if(index != -1){
                    const filteredItems =  selectedFilters.filter(item=>item !== filter.key);
                    setSelectedFilters(filteredItems);
                }else{
                    setSelectedFilters([...selectedFilters,filter.key]); 
                }
            }else{
                setSelectedFilters([...selectedFilters,filter.key]);
            }
    
    }
    const setFilterAction2 = (filter) => {
        
        if(selectedFilters2.length > 0){
            const index = selectedFilters2.findIndex(fi=>fi === filter.name);
            if(index != -1){
                const filteredItems =  selectedFilters2.filter(item=>item !== filter.name);
                setSelectedFilters2(filteredItems);
            }else{
                setSelectedFilters2([...selectedFilters2,filter.name]); 
            }
        }else{
            setSelectedFilters2([...selectedFilters2,filter.name]);
        }

    }
    const setFilterAction3 = (filter) => {
        
        if(selectedFilters3.length > 0){
            const index = selectedFilters3.findIndex(fi=>fi === filter.name);
            if(index != -1){
                const filteredItems =  selectedFilters3.filter(item=>item !== filter.name);
                setSelectedFilters3(filteredItems);
            }else{
                setSelectedFilters3([...selectedFilters3,filter.name]); 
            }
        }else{
            setSelectedFilters3([...selectedFilters3,filter.name]);
        }

    }
    const setFilterAction4 = (filter) => {
       
        if(selectedFilters4.length > 0){
            const index = selectedFilters4.findIndex(fi=>fi === filter.key);
            if(index != -1){
                const filteredItems =  selectedFilters4.filter(item=>item !== filter.key);
                setSelectedFilters4(filteredItems);
            }else{
                setSelectedFilters4([...selectedFilters4,filter.name]); 
            }
        }else{
            setSelectedFilters4([...selectedFilters4,filter.name]);
        }

    }
  
    return(
        <div>
            <SlideInModal open={open} direction="right" onClose={onClose}>
                <div className='-mx-18 -my-18'>
                    <h3 className='font-muller font-medium text bg-gray-0 py-12 px-24 border-b border-gray-40'>Фильтр</h3>

                    <div className=''>
        
                        <Accordion title="Бренд">
                            <div className='py-10'>
                                {/* name, children, id, isChecked, action, checkboxStyle */}
                                {
                                    filterItem1 && filterItem1.map((filter,i) => {
                                      
                                        return (
                                            <div key={i}>
                                                <CheckboxComponent name={'filterItem1[]'} id={filter.key} isChecked={selectedFilters.find(fi=>fi === filter.value)}  action={()=>setFilterAction(filter)}>{filter.value}</CheckboxComponent> 
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </Accordion>
                        <Accordion title="Страна">
                            <div className='py-10'>
                                {/* name, children, id, isChecked, action, checkboxStyle */}
                                {
                                    filterItem2 && filterItem2.map((filter,i) => {
                                      
                                        return (
                                            <div key={i}>
                                                <CheckboxComponent name={'filterItem2'} id={filter.name} isChecked={selectedFilters2.find(fi=>fi === filter.name)}  action={()=>setFilterAction2(filter)}>
                                                    <span className='flex items-center justify-between w-full'>
                                                        {filter.name}

                                                        <span>{filter.quantity}</span>
                                                    </span>

                                                </CheckboxComponent> 
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </Accordion>
                        <Accordion title="Обработка">
                            <div className='py-10'>
                                {/* name, children, id, isChecked, action, checkboxStyle */}
                                {
                                    filterItem3 && filterItem3.map((filter,i) => {
                                      
                                        return (
                                            <div key={i}>
                                                <CheckboxComponent name={'filterItem3[]'} id={filter.name} isChecked={selectedFilters3.find(fi=>fi === filter.name)}  action={()=>setFilterAction3(filter)}>
                                                    <span className='flex items-center justify-between w-full'>
                                                        {filter.name}

                                                        <span>{filter.quantity}</span>
                                                    </span>      
                                                </CheckboxComponent> 
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </Accordion>
                        <Accordion title="Вес">
                            <div className='py-10'>
                                {/* name, children, id, isChecked, action, checkboxStyle */}
                                {
                                    filterItem4 && filterItem4.map((filter,i) => {
                                      
                                        return (
                                            <div key={i}>
                                                <CheckboxComponent name={'filterItem4[]'} id={filter.name} isChecked={selectedFilters4.find(fi=>fi === filter.name)}  action={()=>setFilterAction4(filter)}>
                                                    <span className='flex items-center justify-between w-full'>
                                                        {filter.name}

                                                        <span>{filter.quantity}</span>
                                                    </span>    
                                                </CheckboxComponent> 
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </Accordion>
                

                        <div className='px-24 py-12 border-b border-gray-40 mb-76'>
                            <h3 className=' font-muller font-medium text mb-14'>Сортировка</h3>
                            <div className=''>
                                { filterItem6.map((item,i)=>{
                                    return(
                                        <div className='-mb-12' key={i}>
                                            <RadioComponent name={'filter6'} isChecked={selectedFilters6 === item} id={item} action={()=>setSelectedFilters6(item)}>{item}</RadioComponent>
                                        </div>
                                    )
                                })
                                
                                }
                            </div>
                        </div>

                        <div className='flex'>
                            <Button variant={'primary'} style={'flex-1'}>Сбросить все</Button>
                            <Button variant={'default'} style={'flex-1'}>Сбросить все</Button>
                        </div>
                    </div>
                </div>
            </SlideInModal>
        </div>
    );
}

export default Filter;