import React from "react";
import myLogo from '../images/logo-no-background.png';
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import './header.css'


export default function Header() {
    return (
        <header>
            <a><img src="" alt="Logo"/></a>
                <ul className="nav">
                    {
                    navListData.map(nav => (
                    <NavListItem key={nav._id} nav={nav}/>
                     ))
                    }
                </ul>
        </header>
    );
}

