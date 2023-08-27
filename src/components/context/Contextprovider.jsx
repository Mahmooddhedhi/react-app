import React, {  createContext, useState } from 'react'
export const LoginContext = createContext(null)

const Contextprovider = ({Children}) => {

    const [account, setAccount] = useState("")


  return (
    <LoginContext.Provider value={{ account, setAccount }}>
        {Children}
    </LoginContext.Provider>
   
  )
}

export default Contextprovider
