import React from 'react'
import './header.css'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import Search from '../components/Search'
import Button from '../components/Button'

function Header({scroll}) {
  const handleNavOnClick = id => {
    const [navList, setNavList] = useState(navListData);

    const newNavList = navList.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;  
    });

    setNavList(newNavList);
  }
  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
        <a href="/" className="logo">
        Flixify
        </a>
        <ul className="nav">
            {
                navListData.map(nav=>(
                    <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
                ))
            }
        </ul>
        <Search />
        <Button 
          icon={<ion-icon name="log-in-outline"></ion-icon>} 
          name='Sign in' 
        />
    </header>
  )
}

export default Header