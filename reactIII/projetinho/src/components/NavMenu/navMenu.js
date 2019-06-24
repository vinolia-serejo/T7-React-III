import React from 'react'
import './navMenu.css'

function NavMenu(props){
    return (
        <nav className="navMenu">
        <ul className="navMenu__lista">
            <li className="navMenu__item">
                <a className="navMenu__link">
                    Bem vindo(a): <br />
                    <strong>@{props.usuario}</strong>
                </a>
            </li>
            <li className="navMenu__item">
                <a className="navMenu__link" href="">Página Inicial</a>
            </li>
            <li className="navMenu__item">
                <a className="navMenu__link">Hashtags</a>
            </li>
            <li className="navMenu__item">
                <a className="navMenu__link">Logout</a>
            </li>
        </ul>
    </nav>
    )
}
export default NavMenu