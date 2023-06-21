import React from "react";
import './contato.css'

export default function Contato() {
    return(
        <section className="contato_section" id="contatos">


            <h2>Contato</h2>

            <div className="contato_container">
                <h3>Entre em contato comigo por email!</h3>
                <form action="https://formsubmit.co/ryancamposcontato@gmail.comm" method="POST">
                    <input type="text" name="name" required placeholder="Digite a sua mensagem"></input>
                    <input type="email" name="email" required value="ryancamposcontato@gmail.com"></input>
                    <button type="submit">Enviar Mensagem</button>
               </form>
            </div>

            {/* <div className="color_transform">
                
            </div> */}
   
        </section>
    )
}