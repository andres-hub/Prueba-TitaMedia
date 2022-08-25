import { useAuth0 } from '@auth0/auth0-react'


const Logout = () => {
    const { logout, isAuthenticated } = useAuth0()
  return (
    <>
      {isAuthenticated &&(
        <a className='btn' onClick={()=> logout()}>Logout</a>
      )}
    </>
  )
}

export default Logout