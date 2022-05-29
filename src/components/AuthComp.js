import React, { useState, useEffect } from 'react'
import UserContext from '../Context';

const AuthComp = (props) => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  const logIn = () => {
    setIsUserLoggedIn(true);
  }

  const logOut = () => {
    setIsUserLoggedIn(false);
    
  }
  
  return (
    <UserContext.Provider value={{
      isUserLoggedIn,
      logIn,
      logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default AuthComp