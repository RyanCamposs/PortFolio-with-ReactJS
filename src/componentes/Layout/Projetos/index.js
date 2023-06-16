import React from 'react';
import './projetos.css';
import ListaDeProjetos from '../../ListaDeProjetos';
import contador from './assets_photos/contador-regressivo.png';
import colorflipper from './assets_photos/colorflipper.png';
import lampada from './assets_photos/lampada.png';
import sorveteria from './assets_photos/sorveteria.png';
import cafeteria from './assets_photos/cafeteria.png';
import calculadora from './assets_photos/calculadora.png'

export default function Projetos() {
    return (
        <section className="projetos_section" id="Projetos">
            <h2>Projetos</h2>

                <div className="projetos_container">
                    
                        <ListaDeProjetos 
                            titulo="Contador Regressivo"
                            imagem={contador}
                            linkPort="https://github.com/RyanCamposs/Contador-Regressivo" linkPage="https://contador-regressivo-htxe.vercel.app/"
                        />

                        <ListaDeProjetos 
                            titulo="Color Flipper" 
                            imagem={colorflipper}
                            linkPort="https://github.com/RyanCamposs/color-flipper" linkPage="https://color-flipper-cyan.vercel.app/"
                        />

                        <ListaDeProjetos 
                            titulo="Lâmpada"
                            imagem={lampada}
                            linkPort="https://github.com/RyanCamposs/ProjetoLampada" linkPage="https://projeto-lampada-phi.vercel.app/"
                        />
        

                </div>


                <div className="projetos_container">
                    
                        <ListaDeProjetos 
                            titulo="Sorveteria"
                            imagem={sorveteria}
                            linkPort="https://github.com/RyanCamposs/Sorveteria" linkPage="https://sorveteria-flame.vercel.app/"
                        />

                        <ListaDeProjetos 
                            titulo="Cafeteria" 
                            imagem={cafeteria}
                            linkPort="https://github.com/RyanCamposs/Cafeteria" linkPage="https://cafeteria-htxe.vercel.app/"
                        />

                        <ListaDeProjetos 
                            titulo="Calculadora"
                            imagem={calculadora}
                            linkPort="https://github.com/RyanCamposs/calculadora" linkPage="https://calculadora-htxe.vercel.app/"
                        />
        

                </div>

        

    






        </section>
    )
}
