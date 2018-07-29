import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import './Header.css'

const Header = () => (
    <header>
        <Link to='/'><i className="fa fa-btc"></i></Link>
        <Search />
    </header>
)

export default Header