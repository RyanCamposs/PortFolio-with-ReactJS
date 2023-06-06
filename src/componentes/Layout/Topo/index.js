import React from 'react';
import logo from '../../../assets/logo.png';
import './header.css';

function Topo(){
    return (
        <header>
            <div className="header_items">
                <div className="header_logo">
                    <img src={logo} alt="logo"></img>
                </div>

                <div className="header_link">
                    <a href="#contatos">Meu contato</a>
                </div>
            </div>
        </header>
    )
}

export default Topo;