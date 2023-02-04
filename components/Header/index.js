import React from 'react';
import ForDesktop from './forDesktop';
import ForMobile from './forMobile';


const Header = () => {
    return(
        <div>
            <ForMobile/>
            <ForDesktop/>
        </div>
    )
}

export default Header;