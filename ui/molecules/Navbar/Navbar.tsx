import React from 'react';
import {useNavigate } from "react-router-dom";
import './Navbar.scss';
import {useMenu} from "hooks/useMenu";
import {Icons} from "resources/icons/Icons"

const Navbar = () => {
    const menu = useMenu();
    const navigate = useNavigate(); 
    const gotoPage = (route: string):void => {
        navigate(route);
    }
    return (
        <>
            <div className="navbar">
                <div className="navbar__title">Me</div>
                <div className="navbar__socials">
                    <a>
                    </a>
                </div>
            </div>
            <div className="menu">
                {menu.map((item) => 
                    <span key={item.route} 
                        className={`menu__item ${item.active? 'menu__item--active': ''}`}
                        onClick={() => gotoPage(item.route)}
                    >
                        {item.label}
                    </span>
                )}
            </div>
        </>
      
    )
}

export default Navbar
