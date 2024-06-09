import React from "react";
import myLogo from '../images/logo-no-background.png';
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import NavCategories from "../components/NavCategories";
import navCategories from "../data/navCategories";
import './header.css'
import Search from "../components/Search"
import Button from "../components/Button";

export default function Header() {
    return (
        <header>
                <a href="/" className="brand-logo">Flixify</a>
                <ul className="navbar">
                    {navListData.map(nav => (
                        <NavListItem key={nav._id} nav={nav} />
                    ))}
                </ul>
                <Search />
                <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign In'/>
        </header>
    );
}

