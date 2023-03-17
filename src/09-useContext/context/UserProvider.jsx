import React, { useState } from 'react'
import { UserContext } from './UseContext'

// const user = {
//   id: 1234,
//   name: 'Ever Yuneri',
//   email: 'reve_1997@hotmail.com'
// };

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
