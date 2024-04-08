/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config"

export const AuthContext = createContext(null)
export default function AuthContextComponent({children}) {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

//    new user
const createNewUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// login
const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// onAuthStateChanged
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
        setLoader(false)
        return () =>{
            unSubscribe()
        }
     })

},[])

// sing out
const logOut = () => {
    setLoader(true)
    return signOut(auth)
}

// google auth
const googleSingIn = () =>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
}

// github auth
const githubSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, githubProvider)
}

// update user profile
const userUpdateProfile = (name, image) =>{
   return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
      })

}













    const authInfo = {user, createNewUser, userLogin, logOut, loader, googleSingIn, githubSignIn, userUpdateProfile}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
