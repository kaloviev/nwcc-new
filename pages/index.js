import Layout from '../components/Layouts/mainLayout'
import HomeBanner from '../components/Pages/Home/Banner'
import HeroBg from '../components/Pages/Home/HeroBg'
import ProductGrid from '../components/Pages/Home/ProductGrid'
import RichTextContent from '../components/Pages/Home/RichTextContent'

import httpClirnt from 'services/HttpClient'
import { createContext } from 'react'


export async function getStaticProps() {
  const shop = await httpClirnt.get('/shop')
  const brands = await httpClirnt.get('/brands')

  return {
    props: {
      shop,
      brands,
    },
  }
}

export default function Home({ shop, brands }) {
  return (
    <>
      <HomeBanner brands={brands}/>
      <ProductGrid shop={shop}/>
      <RichTextContent/>
      <HeroBg/>
    </>
  )
}


Home.getLayout = (page)=>{
  return(
    <Layout meta={{
      title: 'Ecommerce',
      description: 'Homepage'
    }}>
      {page}
    </Layout>
  )
}
