import React from "react";
import myLogo from '../images/logo-no-background.png';
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import NavCategories from "../components/NavCategories";
import navCategories from "../data/navCategories";
import './header.css'


export default function Header() {
    return (
        <header>
                <a href="/" className="brand-logo">Flixify</a>
                <ul className="navbar">
                    {navListData.map(nav => (
                        <NavListItem key={nav._id} nav={nav} />
                    ))}
                </ul>
        </header>
    );
}

