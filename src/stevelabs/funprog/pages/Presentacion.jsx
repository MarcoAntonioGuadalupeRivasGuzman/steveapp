import React from "react";

function Prog1Presentacion() {
    return (
        <>
            <div className="div-curso">
                <div className="center">
                    <h1 className="title-subject">Acerca del curso</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">
                    El curso esta pensado para que personas que no han programado
                    nunca y que quieren empezar a programar, por esta razon se abordan
                    temas simples y tambien se explicaran cosas sencillas como la configuracion
                    del ambiente para poder inciar con la programacion.
                </p>

                <p className="content-curso">
                    El curso se creo por un estudiante de temas relacionados con programcion pero
                    se espera que la informacion pueda servir para las personas que
                    quieren aprender y quisa la explicacion sea mas sencilla y clara.
                </p>

                <p className="content-curso">
                    Durante el curso se invitara al usuario a usar tanto el sistema operativo
                    windows como un sistema linux aunque las variaciones estaran principalmente
                    en la configuracion del ambiente de desarrollo.
                </p>
                <div className="center">
                    <h1 className="title-subject">Ambiente de desarrollo</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">Para preparar el ambiente de desarrollo para el curso sera
                    necesario contar con los siguientes requisitos
                </p>

                <ul>
                    <li>Lenguaje C</li>
                    <li>Un compilador de lenguaje C</li>
                    <li>Un editor de codigo o texto</li>
                    <li>Terminal o cli del sistema</li>
                </ul>

                <p className="content-curso">
                    Si se desea se puede usar un IDE como codeblocks, Clion, eclipse,
                    Codelite o visual studio aunque mas adelante se mencionarana algunas
                    ventajas que tiene solo usar un editor de texto en lugar de usar un
                    ide
                </p>

                <div className="center">
                    <h1 className="title-subject">Porque es mejor usar un Editor de Codigo</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">
                    Viendo el tema desde el ambito de productividad no es lo mas recomendable
                    ya que al no usar un ide tenemos que invertir tiempo en pasos extras como
                    tener que pasar a la terminal a compilar, perdemos efectividad como puede
                    ser compilar paso a paso un programa, ya que muchas veces los editores de
                    codigo no tienen estos complementos y tenemos que agregarlos por nuestra
                    cuenta.
                </p>

                <p className="content-curso">
                    A pesar de lo anterior el tener que compilar por nuestra cuenta nos deja ver
                    mas del proceso que conlleva compilar un programa teniendo que usar los comandos
                    necesario para generar los ejecutables de los programas y tener iteracciones con
                    la terminal ya que pocos estan acostumbrados a esto a pesar de que la terminal
                    puede ser un herramienta muy importante que aporta conocimientos.
                </p>

                <div className="center">
                    <h1 className="title-subject">Preparacion del entorno de desarrollo para el curso</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">
                    A continacion se dara una recomendacion de programas para tener un entorno
                    en cual se puedan desarrollar los programas que se veran a lo largo del curso,
                    aunque esta configuracion es opcional y puedes usar programas diferentes con los
                    que te sientas mas comodo.
                </p>

                <h1 className="title1">Editor de codigo</h1>
                
                <p className="content-curso">
                    Con esta aplicacion podemos escribir el codigo del curso y puede ser el 
                    tipico block de notas si no queremos complicarnos pero si usamos alguno 
                    de los que se recomiendan aqui o uno diferenre nos dara opciones adicionales 
                    como resaltado de sintaxis, manejo de documentos entre otras funciones. 

                    A continuacion se muesta una lista de editores de codigo que se pueden usar:
                </p>

                <ul>
                    <li>
                        <a>Vs code</a>
                    </li>
                    <li>
                        <a>Atom</a>
                    </li>
                    <li>
                        <a>NotePad++</a>
                    </li>
                    <li>
                        <a>Sublime text</a>
                    </li>
                    <li>
                        <a>Vim</a>
                    </li>
                </ul>

                <p className="content-curso">
                    Los editores que se mencionana anteriormente estan disponibles para la mayoria 
                    de sistemas operativos (Windows, linux, Macos) con la exception de vim que suele 
                    estar disponible en linux o macos pero los demas son complatibles con la mayoria 
                    y son de uso gatuito sin contatr Sublime Text que requiere un unico pago por su 
                    licencia.
                </p>

                <p className="content-curso">
                    El editor que suelo usar y que de cierta manera es de mis favoritos se trata de 
                    visual estudio code ya que tiene muchas extensiones pero aun asi su version vanilla
                    es bastante util
                </p>

                <h1 className="title1">Lenguaje de programacion</h1>

                <p className="content-curso">
                    Se usara lenguaje C ya que este lenguaje permite tener una base ya que tiene la 
                    mayoria de convenciones que es bueno tenerlas en cuenta a la hora de empezar a 
                    programar, con esto se puede tener una mejor idea de los principios de programacion
                    y la logica de la programacion con la que se trabaja al inciar a trabajar
                </p>

                <p className="content-curso">
                    En la mayoria de los sistemas operativos este lenguaje ya viene instalado por lo que 
                    no es necesario tener que instalar el lenguaje asi que este punto no siempre es necesario
                    intalar el lenguaje desde cero
                </p>

                <h1 className="title1">Compilador</h1>

                <p className="content-curso">
                    El compilador sera el encargado de crear el ejecutable o binario de nuestro programam 
                    para poder ejecutarlo y ver su funcionamiento, este no viene instalado por defecto en 
                    los sistemas operativos por lo que tenemos que instalarlo por nuestra cuenta y la recomendacion 
                    es que se use gcc en los sistemas de linux o mingw para windows ya que con esto se podra comipilar 
                    el codigo.
                </p>

                <h1 className="title1">Entorno de desarrollo integrado (ide)</h1>
            </div>
        </>
    );
}

export default Prog1Presentacion;