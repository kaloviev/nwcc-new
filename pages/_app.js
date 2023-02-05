import { useEffect } from 'react'
import httpClient from 'services/HttpClient'
import '../styles/globals.css'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"
import ContactsContext from 'contexts/Contacts'
import ShopContext from 'contexts/Shop'
import CartProvider from 'contexts/Cart'
import { useRouter } from 'next/router'

NProgress.configure({ showSpinner: true })

export default function MyApp({ contacts, shop, Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [])

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
