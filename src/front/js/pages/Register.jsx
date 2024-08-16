import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"

const initialState = {
    lastname: "",
    email: "",
    password: ""
}

const Register = () => {
    const { actions } = useContext(Context)

    const [user, setUser] = useState(initialState)

    const handleChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("lastname", user.lastname)
        formData.append("email", user.email)
        formData.append("password", user.password)
        console.log(formData)
        const response = actions.register(formData)
        response
            .then((res) => {
                if (res == 201) {
                    setUser(initialState)
                    alert("Usuario registrado exitosamente")
                } else if (res == 400) {
                    alert("El usuario ya existe")
                } else {
                    alert("Error al registrar el usuario, si el proble persiste comuniquese con el admin de la web")
                }
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h2 className="text-center my-3">Ingresa en nuestra plataforma :</h2>
                <div className="col-12 col-md-6 border py-4">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group mb-3">
                            <label htmlFor="txtLastname">Nombre completo:</label>
                            <input
                                type="text"
                                placeholder="Jose Hernandez"
                                className="form-control"
                                id="txtLastname"
                                name="lastname"
                                value={user.lastname}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="txtEmail">Correo:</label>
                            <input
                                type="text"
                                placeholder="correo@algo.com"
                                className="form-control"
                                id="txtEmail"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="btnPassword">Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="btnPassword"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-outline-primary w-100">Registrarme</button>
                    </form>
                </div>

                <div className="w-100"></div>

                <div className="col-12 col-md-6 d-flex justify-content-between my-1">
                    <Link to={"/login"}>Ya tengo una cuenta</Link>

                </div>
            </div>
        </div>
    )
}

export default Register
