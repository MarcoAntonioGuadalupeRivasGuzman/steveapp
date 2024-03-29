import React from "react";
import Card from "./Card";

import '../App.css';

function Videos(){
    return(
        
        <section>
        <div className="grid-videos">
            <div className="Videos">
                <Card imgUrl={"/Assets/system32.jpg"} title="Borrar Sytem32" 
                paragraph="La popular broma de borrar System32 para que tu pc sea mas rapida puede generar mas problemas de lo que crees"
                urlVideo="https://www.youtube.com/watch?v=QsPAVmQFnUQ"/>

                <Card imgUrl={"/Assets/pacman.jpg"} title="Los fantasmas de pacman"
                paragraph="El popular juego guarda algunos secretos sobre el comportamiento de sus enemigos, una forma de programacion interesante"
                urlVideo="https://www.youtube.com/watch?v=XLCuuMvgbec"/>

                <Card imgUrl={"/Assets/cpu.jpg"} title="Procesador multi nucleo"  
                paragraph="Los procesadores tienen diferentes propiedades y una de ellas es el numero de nucleos que pose, aprende mas en el video"
                urlVideo="https://www.youtube.com/watch?v=AuPJ8kL-iLs"/>

                <Card imgUrl={"/Assets/librerias.jpg"} title="Librerias de programacion" 
                paragraph="Las librerias de programacion son un tema recurrente dentro de la programacion, visita el video para saber mas sobre ellas"
                urlVideo="https://www.youtube.com/watch?v=V4ZxnSYly-Y"/>
            </div>
            <section className="columna">
                <div className="div-columna">
                    <h1 className="title1">El cyber punk esta delante de nosotros</h1>
                    <p className="content-columna">La mayoria de personas se siente atraida por la idea de vivir en una epoca ambientada en
                    la tematica futurista y distopica de una sociedad cyberpunk ya que para ser honestos a quien
                    no le gusta la idea de que tengamos autos voladores, implamentes tecnologicos y a una red de
                    tecnologia que nos permite estar conectados con la mayoria. Pero esto no esta lejos de nuestra
                    actualidad y de hecho la gran mayoria de personas esta viviendo en una epoca de tecnologia al 
                    nivel de una historia cyberpunk aunque no lo paresca hay una gran muestra de esto en muchos lados
                    como podemos ver a continuacion.
                    </p>
                    <center>
                        <a className="linkVideo" href="article">Seguir leyendo</a>
                    </center>
                </div>
            </section>
        </div>
        </section>
    );
}

export default Videos;
