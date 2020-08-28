import React from "react"
import imgmarvin from './marvinpistola.png'
import './css.css'


const Header = (props) => {
       return (
        <header>
            <img className="logo" src={imgmarvin} />
            <div className="title">Projekt_Kino</div>
            <div className="title"> Coolest films ever</div>
            
        </header>
    )
}


export default Header