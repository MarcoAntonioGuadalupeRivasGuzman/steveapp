import React from "react";
import { DivCurso, DivRead } from "../../../component/Contenedores/Cajas";

function Prog1Estructura() {
    return (
        <>
            <DivCurso>
                <DivRead>
                    <div className="center">
                        <h1 className="title-subject">Estructura de un programa en c</h1>
                    </div>

                    <p className="content-curso">
                        La estructura básica de un programa en c está compuesta por los archivos de
                        cabecera, la función main y el cuerpo de la función main, estos son los elementos
                        básicos del programa que vimos anteriormente (hola mundo) y en su mayoría mucho
                        programas se componen de lo mismo.
                    </p>

                    <div className="center">
                        <h1 className="title-subject">Archivos de cabecera</h1>
                    </div>

                    <p className="content-curso">
                        Los archivos de cabecera también llamados librerías son archivos que
                        contienen código de lenguaje c pero que está presente en programa que creamos,
                        más bien lo incluimos en el código al declararlo con la siguiente sintaxis:
                    </p>

                    <p className="content-curso">
                        De esta manera el compilador sabe que en esa parte debe colocar código que no
                        está presente en nuestro archivo que contiene la función main, si no que debe
                        buscar lo en un archivo con el nombre declarado en la directiva include.
                        En el ejemplo anterior usamos la función printf sin tener que declararla o
                        sin tener que escribir la palabra printf previamente, la razón es simple la
                        función printf pertenece a la librería stdio.h y al usar include al inicio
                        del programa le estamos diciendo al compilador que busque el archivo stdio.h y
                        copié todo su contenido dentro de nuestro programa de hola mundo. De esta manera
                        el programa ya puede saber a que hace referencia printf y puede ejecutar las líneas
                        de código que permiten imprimir en pantalla el mensaje que queremos, si bien los
                        archivos de cabecera pueden parecer confusos por ahora más adelante tendrán más
                        sentido y también permitirán hacer menos trabajo a la hora de programar.
                    </p>

                    <div className="center">
                        <h1 className="title-subject">La Funcion Main</h1>
                    </div>

                    <p className="content-curso">
                        La funcion main es el punto de partida de un programa en lenguaje C y otros lenguajes
                        incorporan este tipo de funciones, todos los programas usan la funcion main y desde esta
                        se llaman a otras funciones que se crean o que ya existen en la version del lenguaje.
                    </p>

                    <p className="content-curso">
                        La funcion main es la primera en tener el contro de ejecucion del programa y tambien es
                        la encargada de pasar el control a otras funciones que crea el programador o que solo las
                        llama, se puede decir que la funcion main es necesaria por la forma en que se contruyo el
                        lenguaje de programacion y es que el compilador necesita un indicador de que ha terminado
                        de procesar la entrada del codgigo. Puede que en este momento no se entiende el porque se
                        necesita que los programas tengan una raiz pero si se estudian temas mucho mas complejos como
                        lo es la construccion de un compilador hara mas sentido la forma en que esta construido el
                        lenguaje pero por ahora basta con pensar que la funcion main es lo primero que debemos crear
                        en un programa de lenguaje C.
                    </p>
                </DivRead>
            </DivCurso>

        </>
    );
}

export default Prog1Estructura;