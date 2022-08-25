import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const {user, isAuthenticated, logout} = useAuth0()
    console.log(user)
  return (
    <>
       {isAuthenticated &&(
        <div className='profile'>
            <h3 className='textProfile'>Pepito peres</h3>
        </div>
       )}
    </>
 
  )
}
