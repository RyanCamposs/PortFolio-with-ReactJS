import React from 'react';
import './home.css';
import seta from '../../../assets/arrow.png';

function Home() {
    return (
        <main>
            <div className="home_content">

                <article>
                <div className="home_title">
                    <h1>Ryan Campos</h1>
                </div>
                <div className="home_subtitle">
                    Faço pequenos projetos para ampliar meus conhecimentos.
                </div>
                </article>
                <div className="home_redirect_image">
                    <a href="#Projetos">
                        <img src={seta}></img>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Home;