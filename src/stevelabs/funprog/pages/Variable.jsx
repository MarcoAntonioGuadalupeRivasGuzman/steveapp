import React from "react";
import { DivCurso, DivRead, TitleDiv } from "../../../component/Contenedores/Cajas";

function Prog1Variable() {
    return (
        <>
            <DivCurso>
                <DivRead>

                    <TitleDiv>
                        <h1 className="title-subject">Variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        La variables son contenedores para informacion o valores de un programa
                        los cuales nos permiten tener informacion dentro de nuestro programa y
                        poder manipularla dentro de nuestro codigo.
                    </p>

                    <p className="content-curso">
                        Las razones para tener que almacenar informacion pueden ser diversas ya que
                        por ejemplo podemos querer que el usuario ingrese algo hacia nuestro programa
                        y luego nosotros manipular esa informacion, por ejemplo en programa que simula
                        una calculadora pedira al usuario que ingrese los numeros que desea sumar, restar
                        o en general los numeros a los cuales desea aplicar alguna operacion. En este caso
                        es util que usemos variables para poder guardar los valores que el usario ingreso a
                        nuestro programa y despues poder hacer las operaciones y dar el resultado al usuario.
                    </p>

                    <TitleDiv>
                        <h1 className="title-subject">Tipos de variables</h1>
                        <hr className="line" />
                    </TitleDiv>

                    <p className="content-curso">
                        Las variables a las que anteriormente llamamos contenedores tienen un tipo especifico 
                        para diferentes tipos de informacion, ya que por ejemeplo podemos tener un numero 
                        entero o natural que no tienen una fracion o un punto decimal ya que no es igual 
                        1 que 1.5, de la misma forma en la programcion se alamcena de diferente manera 
                        un numero decimal y un entero.
                    </p>

                    <p className="content-curso">
                        Algunos de los tipos de datos que existen en el lenguaje C son int, float, char, bool, 
                        double y long double. int y float almacenan numeros pero int almacena enteros sin tomar en 
                        cuenta ningun decimal mientras que float almacena un entero y 6 o 7 decimales de precision, 
                        char solo almacena un dato de tipo caracater y double admite mayor numero de decimales ya que 
                        almacena hasta 14 decimales y long double puede almacenar hasta 19 decimanles.
                    </p>

                </DivRead>
            </DivCurso>
        </>
    );
}

export default Prog1Variable;