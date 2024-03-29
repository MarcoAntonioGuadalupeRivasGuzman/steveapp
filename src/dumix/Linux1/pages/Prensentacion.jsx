import React from "react";
import { DivCurso, DivRead } from "../../../component/Contenedores/Cajas";

function Presentacion() {
    return (
        <DivCurso>
            <DivRead>
                <center>
                    <h1 className="title-subject">Hola a todos</h1>
                </center>

                <hr className="line" />

                <p className="content-curso">Este curso tiene como finalidad dar una introduccion
                    a las personas que nunca han utilizado un sistema operativo linux pero tambien
                    para las personas que no han interactuado con la terminal de comando, ya que
                    no se tendra en cuenta el uso de la interfaz grafica del sistema operativo pues
                    en este apartado un sistema operativo como ubuntu no difiere tanto con windows y
                    ciertamente lo interesante de usar linux no esta en el manejo de la interfaz de
                    usuario si no el manejo de su terminal y de las herramientas que nos provee como
                    el manejador de paquetes.</p>

                <p className="content-curso">No se espera que la persona que tome el curso tenga experiencia
                    en el sistema pero si algunos aspectos como tener instaldo un sistema operativo de linux,
                    ya sea como maquina virtual, dual boot o que solo tengas instalado linux en tu maquina, lo
                    anterior es para poder poner en practica los comandos que se mostraran durante el curso.
                    Otros sistemas operativos cuentan con su propia consola de comandos y es posible usarla de
                    manera similar a como se utiliza la terminal de linx pero es importante mencionar que los
                    comandos pueden no ser los mismos y en ese caso se debe buscar el equivalente del comando
                    porque en este curso solo se mostraran comandos con la sintaxis de linux.</p>

                <center>
                    <h1 className="title-subject">¿De que sirve aprender Linux?</h1>
                </center>

                <p className="content-curso">Para la mayoria de las personas solo existe un sistema operativo que es
                    windows y una pequeña parte sabe que existe otro sistema porque tienen acceso a un equipo de apple
                    y al final una parte casi inexistente sabe de la existencia de un tercer sistema operato que tiene
                    como mascota un pinguino, este tipo de personas no suele ser las mas sociables y tambien se podria
                    decir que les gusta complicarse la vida porque si ya todos usan un sistema para que buscar una alternativa.
                </p>

                <p className="content-curso">Conocer este nuevo sistema operativo te permitira concer nuevos temas como
                    el uso de comandos, permisos sobre archivos, interactuar con una terminal entre muchos otros temas,
                    aunque no lo paresca este sistema esta presente en muchos lados como pueden ser los telefonos moviles
                    android, servidores de alojamiento de paginas web y muchas otras empresas usan linux por diferentes ventajas
                    que ofrecen. Aun con lo anterior considero que si eres estudiante de una carrera relacionada a informatica,
                    computacion, comunicaciones o incluso de electronica te sera de mucha ayuda aprender este sistema y ademas
                    puede ser mas comodo trabajar en un entorno de linux.</p>
            </DivRead>
        </DivCurso>
    );
}

export default Presentacion;
