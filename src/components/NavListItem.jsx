import React from 'react'
import Nav from 'react-bootstrap/Nav';

function NavListItem({nav}) {
  return (
    <Nav.Link href={nav.link}>{nav.name}</Nav.Link>
  )
}

export default NavListItem