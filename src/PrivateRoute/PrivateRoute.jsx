/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextComponent"
import { Navigate, useLocation } from "react-router-dom"


export default function PrivateRoute({children}) {
    const location = useLocation()
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return (
            <div className=" h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>

            </div>
        )
    }
    if(user){
        return children
    }
  return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
}
