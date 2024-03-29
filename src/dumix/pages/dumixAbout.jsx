import React from "react";

function DumixAbout(){
    return(
        <>
        <div className="div-about">

            <h1 className="title1">¿Que es dumix?</h1>
            <p className="Content">Ya que mis habilidades para apoyar al desarrollo del codigo abierto
            no son las mejores y mi tiempo es limitado, cree este apartado en mi pagina para poder compartir
            tutoriales para que la gente pueda introducirse a los comandos de linux de manera facil y perder
            el miedo de usar la terminal.</p>
            <p className="Content">Por el momento solo se contaran con comandos basicos que se deben aprender 
            en linux pero con suerte la pagina contara con mas tutoriales y espero en algun momento obtener el 
            apoyo de personas mejor calificadas en el tema para poder ofrecer mejores conocmientos pero por ahora
            este es un pequeño aporte para la comunidad</p>

            <hr className="about-line"></hr>

            <h1 className="title1">¿Porque deberia aprender linux?</h1>

            <p className="Content">Si no eres un usuario que esta enfocado a la informartica, las ingenierias de
            computacion o ciencias puede que no sea una gran herramienta, no lo mal interpretes no es malo que aprendas
            linux pero siendo un usario comun de computadora no obtendras una herramienta tan util pero es bueno conocer
            una alternativa al tipico sistema operativo windows
            </p>

            <hr className="about-line"></hr>

            <h1 className="title1">Linux esta en todos lados</h1>

            <p className="Content">Aunque no lo paresca linux es muy popular en las empresas y de hecho si tienes 
            un telefono con sistema android esta usando un sistema operativo basado en linux sin saberlo, ademas del 
            ejemplo anterior muchas empresas de servicio de hosting o cloud utilizan sistemas de linux para sus
            plataformas porque es un sistemas muy eficiente y bastante estable
            </p>

        </div>

        <div className="gif-footer">
            <div className="footer-item">
                <h1 className="title1">Importante</h1>
                <p className="Content">Esta seccion es creada con el fin de compartir informacion 
                con otros usuarios o personas que quieren empezar en el mundo de linux pero 
                que pueden verse abrumados por la cantidad de comandos o diferencias que se 
                tienen con los sistemas de linux</p>
            </div>
            <div className="item-grid">
                <h1 className="title1">Contacto</h1>
                <p className="contacto">Enviame un <a className="contacto" href="mailto:stevechanvitas@gmail.com">Correo</a></p>
                <a className="contacto" href="https://github.com/MarcoAntonioGuadalupeRivasGuzman">Githud</a>
                <a className="contacto" href="https://www.youtube.com/@stevechambitas2782">Youtube</a>
                <h1 className="title1">Power by <a className="contacto" href="https://giphy.com/">Giphy</a></h1>
            </div>
        </div>

        </>
        
    );
}

export default DumixAbout;