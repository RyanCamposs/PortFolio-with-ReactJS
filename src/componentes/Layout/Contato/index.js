import React from "react";
import './contato.css'

export default function Contato() {
    return(
        <section className="contato_section" id="contatos">

            <h2>Contato</h2>


            <div className="contato_container_items">
                <h3>Entre em contato comigo por email!</h3>
                <form action="https://formsubmit.co/ryancampos393@gmail.com" method="POST">
                    <input type="text" name="name" required placeholder="Digite a sua mensagem"></input>
                    <input type="email" name="email" required value="ryancampos393@gmail.com"></input>
                    <button type="submit">Enviar Mensagem</button>
               </form>
            </div>
   
        </section>
    )
}