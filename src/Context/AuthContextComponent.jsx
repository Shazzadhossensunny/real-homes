/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import auth from "../firebase/firebase.config"

export const AuthContext = createContext(null)
export default function AuthContextComponent({children}) {
    const [user, setUser] = useState(null)

//    new user
const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

// login
const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}












    const authInfo = {user, createNewUser, userLogin}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
