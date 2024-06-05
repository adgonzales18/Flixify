import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './navListItem.css'

function NavListItem({nav}) {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
      </li>
  )
}

export default NavListItem