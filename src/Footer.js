import { Avatar } from '@material-ui/core'
import React from 'react';
import './Footer.css';
import FooterLeft from './FooterLeft';
import FooterMiddle from './FooterMiddle';
import FooterRight from './FooterRight';


function Footer() {
    return (
        <div className="footer">
            <FooterLeft/>
            <FooterMiddle/>
            <FooterRight/>
        </div>
    )
}

export default Footer
