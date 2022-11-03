import { createContext, useState } from "react"
import { saveState, getState } from "./PersistContext"

const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getState())

  function saveStateBefore(state) {
    saveState(state)
    setAuth(state)
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth: saveStateBefore }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext