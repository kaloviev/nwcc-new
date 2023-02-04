import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import PropTypes from 'prop-types';
const Layout = ({children, meta, showFooter}) => {

    const {title,description,icon} = meta;
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="icon" href={icon || '/images/favicon.ico'} />
            </Head>
            <div>
                <Header/>
                    <main>{children}</main>
                {showFooter && <Footer/>}
            </div>
        </>
    )
}

Layout.propTypes = {
    showFooter: PropTypes.bool
};
Layout.defaultProps = {
    showFooter: true
};

export default Layout