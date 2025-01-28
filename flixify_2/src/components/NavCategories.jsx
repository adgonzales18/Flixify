import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavCategories({navCat}) {
  return (
    <NavDropdown.Item href={navCat.link}>{navCat.categoryName}</NavDropdown.Item>
  )
}
export default NavCategories