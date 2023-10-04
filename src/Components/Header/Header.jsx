import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './header.scss'

const Header = () => {
  // Searchbar
  const [searchState, setSearchState] = useState('')

  const handlerSearch = (e) => {
    const value = e.target.value
    setSearchState(value)

    console.log(searchState)
  }

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  return (
    <>
      <nav className='header'>
        <NavLink className='header__logo' to='/'>LOGO</NavLink>
        <input type='text' onChange={handlerSearch} className='header__search search text-center' placeholder='item' />
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
