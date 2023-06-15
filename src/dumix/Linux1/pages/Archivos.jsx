import React from "react";

function Archivos(){
    return(
        <div className="div-curso">
            <h1 className="title1">Archivos</h1>

            <hr className="line"/>

            <p className="content-curso">Los archivos son un elemento importante 
            en la mayoria de sistemas operativos ya que estos pueden tener programas, 
            informacion, o cumplen una funcion en el sistema operativo (en realidad 
            todo el sistema operativo esta completamente compuesto por archivos) 
            por esta razon es importante conocer el manejo de los mismos.</p>

            <h1 className="title1">Listar archivos</h1>

            <p className="content-curso">Uno de los primeros paso es saber como 
            listar los archivos o el contenido de un directorio, el comando es 
            bastante sencillo y ya se ha visto en temas anteriores y es el ls 
            a continuacion se muestra su sintaxis.</p>

            <div className="center">
                <div className="div-code">
                    <p className="code-simple">ls -[opciones] [archivo]</p>
                </div>
            </div>

            <p className="content-curso">El comando anterior se puede usar con la 
            opcion -l para optener un resultado mas detallado de los archivos como 
            se puede ver en el siguiente ejemplo.</p>

            <div className="cli">
                <div className="title-cli">
                    <center>
                        <p className="Content">Terminal</p>
                    </center>
                </div>
                <div className="body-cli">
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls -l -r</span></p>
                    <p className="Content">Total 48</p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <pan className="directorio">Vídeos</pan></p>
                    <p className="Content">drwx------ 6 steve steve 4096 abr 22 22:52 <span className="directorio">snap</span></p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Público</span></p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <spa className="directorio">Plantillas</spa></p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Música</span></p>
                    <p className="Content">drwxr-xr-x 4 steve steve 4096 abr 22 22:05 <span className="directorio">Imágenes</span></p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Escritorio</span></p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Documentos</span></p>
                    <p className="Content">drwxr-xr-x 2 steve steve 4096 may 14 22:40 <span className="directorio">Descargas</span></p>
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                </div>
            </div>

            <p className="content-curso">El resultado anterior muestra las lista extentendida
             de los archivos donde podemos ver el tipo de archivo, los permisos del archivo, 
             el propietario, el grupo propietario, tamaño del archivo, marca de tiempo, 
             nombre del archivo. Esta informacion puede ser muy util a la hora de trabajar 
             con archivos a continuacion se muestra mas sobre los apartados del resultado.</p>

        </div>
    );
}

export default Archivos;