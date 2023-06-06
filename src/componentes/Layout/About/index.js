import React from 'react';
import './about.css';
import reactIcon from '../../../assets/linguagens_icons/react.png';
import javascript from '../../../assets/linguagens_icons/javascript.png'
import css from '../../../assets/linguagens_icons/css.png'
import html from '../../../assets/linguagens_icons/html.png'


export default function About() {
    return(
        <section className="about_container">
            <h2>FrontEnd Developer</h2>

            <h3>16 anos, estudo programação na parte do FrontEnd.<br></br>Atualmente,
            estou com o objetivo de me especializar nessa área.</h3>
            
            <div className="about_images">
                <div className="about_images_box">
                <img src={reactIcon} alt="React Icon" title="ReactJS"></img>
                </div>

                <div className="about_images_box">
                <img src={javascript} alt="JavaScript Icon" title="JavaScript"></img>
                </div>

                <div className="about_images_box">
                <img src={css} alt="CSS Icon" title="CSS"></img>
                </div>

                <div className="about_images_box">
                <img src={html} alt="HTML Icon" title="HTML"></img>
                </div>

                
                


            </div>

        </section>
    )
}