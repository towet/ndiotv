import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import Button, { OutlineButton } from '../button/Button';

import './header.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: '',
        path: '/'
    },
    {
        display: '',
        path: '/'
    },
    {
        display: '',
        path: '/tv'
    }
   
];
const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (

        
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/"></Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="btns">
                        <Button  onClick={() => openInNewTab('https://kwem.netlify.app/')}>
                            chat
                        </Button>
                        
                    </div>
        </div>
            </div>
        
        
    );
}

export default Header;
