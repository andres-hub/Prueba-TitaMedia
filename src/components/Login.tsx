import {useAuth0} from '@auth0/auth0-react'

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
 
  return ( 
    <>
       {!isAuthenticated &&(
         <a className='btn' onClick={()=> loginWithRedirect()}>Login</a>
       )}
    </>
     
  )
}


