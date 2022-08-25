import React from 'react'
import { Login } from './Login'
import Logout from './Logout'
import { Profile } from './Profile'

export const Header = () => {
  return (
    <header className='navBar'>
        <h1 className='textTitle'>Aplicacion</h1>
        <Profile/>
        <Logout/>
        <Login/>
    </header>
  )
}
