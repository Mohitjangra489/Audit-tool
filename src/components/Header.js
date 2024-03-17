import React, { useEffect, useState } from 'react';
import HeaderCss from '../styles/header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className={HeaderCss.headerContainer}>
            <div className={HeaderCss.leftdiv}>
                <div className={HeaderCss.sitelogo}>
                    <Link to={`/`} style={{color:"white",textDecoration:"none"}} >Sitelogo</Link>  </div>
                <div className={HeaderCss.linksdiv}>
                    <ul className={HeaderCss.linksul}>
                        <li className={HeaderCss.linkli}>Pricing</li>
                        <li className={HeaderCss.linkli}>Careers</li>
                        <li className={HeaderCss.linkli}>Blogs</li>
                        <li className={HeaderCss.linkli}>Contact Us</li>
                    </ul>
                </div>
            </div>

            <div className={HeaderCss.logindiv}> <Link to={`/login`}   className={HeaderCss.loginlink}>Login</Link></div>

        </div>
    )
}

export default Header
