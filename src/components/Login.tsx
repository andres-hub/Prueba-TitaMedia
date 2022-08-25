import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { Profile } from './Profile'
export const Login = () => {
  const { loginWithRedirect, isLoading } = useAuth0()
  if(isLoading) return <h1> Cargando...</h1>
  return (
    <div className='Car'>
      <h1> Aplicacion</h1>
      <button onClick={()=> loginWithRedirect()}>Login</button>
      <Profile/>
      
    </div>
  )
}


