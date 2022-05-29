import React, { useState } from 'react'
import UserContext from '../Context';

const getInitialValue = () => {
    return localStorage.getItem('auth-token') !== null
}

const AuthComp = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getInitialValue());
  
  const logIn = () => {
    setIsLoggedIn(true);
  }

  const logOut = () => {
    setIsLoggedIn(false);
    
  }
  
  return (
    <UserContext.Provider value={{
      isLoggedIn,
      logIn,
      logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default AuthComp