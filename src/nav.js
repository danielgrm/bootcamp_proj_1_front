import React from 'react'
import './css.css'

const Nav = (props) => {
    const { to, name } = props.pagina.actions
    return (
        <nav className="">
               <div className="action">
                <button onClick={() => props.mudaPagina(to)}>
                    {name}
                </button>
            </div>
        </nav>
    )
}
export default Nav;
