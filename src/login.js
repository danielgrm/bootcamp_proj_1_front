import React, { useState } from "react"

const Login = (props) => {

    const [fauth, setfauth] = useState({})
    const handleChange = (event) => {
        setfauth({
            ...fauth,
            [event.target.name]:event.target.value
        })
        return;
    }
    const temalgumacoisa = () => fauth.email && fauth.pwd 

    const liberageral = () => {
        if (temalgumacoisa()) {
            props.mudaPagina ("Geralista")
        }
        return;

    }

    return (

        <div className="login">
            <h3>Identifique-se, humano:</h3>
            <label htmlFor="loginid">Login:</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={fauth.email || ""}placeholder="e-mail" />
            <br />
            <label htmlFor="loginpwd">Senha:</label>
            <input type="password" id="pwd" name="pwd" onChange={handleChange} value={fauth.pwd || ""} placeholder="senha" />
            <br />
            <button disabled={!temalgumacoisa()} onClick={liberageral}>Enviar</button>
        </div>
    )
}

export default Login