import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { Navigate } from "react-router-dom"

const Profile = () => {

    const { store } = useContext(Context)
    const { user } = store
    const { actions } = useContext(Context)

    const logout = ()=>{
        actions.logout()
    }

    return (
        <>
            {
                store.token ?
                    <div className="container mx-auto">
                        <h1>Email: {user?.email}</h1>
                        <h1>Lastname: {user?.lastname}</h1>
                        <button className="btn btn-danger" onClick={logout}>Logout</button>
                    </div>
                    :
                    <Navigate to="/login" />
            }

        </>
    )
}

export default Profile