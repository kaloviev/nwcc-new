import React from 'react';
import Layout2 from '../../components/Layouts/layout2';
import FavoriteData from '../../fakeData/favorites.json';
import ProductItem from '../../components/ProductItem';
const breadcrumb = [
    {
        name:'СЗКК Магазин',
        url:'/'
    },
    {
        name:'Личный кабинет'
    }
]
const FavoritesPage = () => {
    return(
        <div className='flex flex-wrap'>
            
            {
                FavoriteData.map((favorite,i)=>{
                    return(
                        <div className='w-full sm:w-6/12 lg:w-4/12'  key={i}>
                            <ProductItem isFavorite={true} type="list" data={favorite} hoverAction={false}/>
                        </div>
                    )
                })
            }
           
        </div>
    )
}

export default FavoritesPage;

FavoritesPage.getLayout = (page) => {
    return(
        <Layout2 page="favorites" title={'Личный кабинет'} breadcrumb={breadcrumb} meta={{title:'', description:''}}>{page}</Layout2>
    )
}