import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const {user, isAuthenticated} = useAuth0()
    console.log(user)
  return (
    <>
       {isAuthenticated &&(
        <div className='profile'>
            <img className='avatar' 
            src={user?.picture}
            alt='https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg' />
            <h3 className='header-text'>{user?.family_name}</h3>
        </div>
       )}
    </>
 
  )
}
