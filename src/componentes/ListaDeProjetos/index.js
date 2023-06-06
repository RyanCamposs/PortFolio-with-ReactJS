import React from 'react';
import Projetos from '../Layout/Projetos';
import './listaprojetos.css'

export default function ListaDeProjetos(props) {
    return (
        <div className="projetos_container">
          <div className="projetos_container_box">
              <div className="projetos_container_box_title">
                {props.titulo}
              </div>
              <div className="projetos_container_box_imagem">
                <img src={props.imagem} alt={props.imagem}></img>
              </div>
              <div className="projetos_container_box_buttons">
                  <a href={props.linkPort} target="_blank">Ver Repositório</a>
                  <a href={props.linkPage} target="_blank">Ver Página</a>

              </div>

          
          
          </div>

          </div>


        
        
    )
}