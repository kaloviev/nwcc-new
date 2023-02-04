import httpClient from 'services/HttpClient'
import '../styles/globals.css'
import ContactsContext from 'contexts/Contacts'
import ShopContext from 'contexts/Shop'
import CartProvider from 'contexts/Cart'

export default function MyApp({ contacts, shop, Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <ShopContext.Provider value={shop}>
        <CartProvider>
          <ContactsContext.Provider value={contacts}>
            {getLayout(<Component {...pageProps} />)}
          </ContactsContext.Provider>
        </CartProvider>
      </ShopContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const contacts = await httpClient.get('/contacts')
  const shop = await httpClient.get('/shop')

  return {
    contacts,
    shop,
  }
}
