import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Menu.scss';

const Menu = () => {
  return (
    <header>
        <Link to="/">
            <h1> CellShop </h1>
        </Link>

        <nav>
            <ul>
                <li> <NavLink className="link" to="/celulares"> Celulares </NavLink> </li>
                <li> <NavLink className="link" to="/computadoras"> Computadoras </NavLink> </li>
                <li> <NavLink className="link" to="/sillas"> Sillas Gamer (durisimas) </NavLink> </li>
            </ul>
        </nav>
    </header>

  )
}

export default Menu