import React from "react";
import "../../App.css";
import { Div60, Div70, DivAuto, DivColum, DivFooter, DivRow } from "../../component/Contenedores/Cajas";

function FooterHave({ power, linkPower }) {

    return (
        <>
            <DivFooter>
                <Div70>
                    <ul className="lista">
                        <li>
                            <a className="archor">SteveLabs</a>
                        </li>
                        <li>
                            <a className="archor">Dumix</a>
                        </li>
                        <li>
                            <a className="archor">Articulos</a>
                        </li>
                    </ul>
                </Div70>
                <Div70>
                    <DivRow>
                        <Div60>
                            <h1 className="title1">Importante</h1>
                            <p className="Content">Esta seccion fue creada gracias al curso de
                                react de Fernando Herrera, si quieres apoyarlo puedes comprar su
                                curso o recomendarlo. Esta pagina forma parte de mi portafolio, si
                                te interesa puedes contactarme en algunas de las siguientes redes.
                                Tambien puedes pasar a mi canal de Youtube quiza encuentras contenido 
                                que te agrade y me agregas a tus canales preferidos.
                            </p>
                        </Div60>
                        <DivRow>
                            <DivColum>
                                <p className="Content">Cursos</p>
                                <a className="link-tag">About</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Developer</p>
                                <a className="link-tag">How to</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Dumix</p>
                                <a className="link-tag">Linux basico</a>
                                <a className="link-tag">Comandos</a>
                                <a className="link-tag">Vingg</a>
                            </DivColum>
                            <DivColum>
                                <p className="Content">Articulos</p>
                                <a className="link-tag">Web Masters</a>
                            </DivColum>
                        </DivRow>
                    </DivRow>
                    <hr />
                </Div70>
                <Div70>
                    <DivRow>
                        <div className="div-footer-logo">
                            <img className="img-footer-logo" alt="logosteve" src="/Assets/logoCanal.png" />
                        </div>
                        <DivAuto>
                            <DivRow>
                                <a href="https://www.youtube.com/@stevechambitas2782"><img alt="youtube" className="img-icon" src="/Assets/yticon.png" /></a>
                                <a href="https://discord.gg/QTdVBq5Q9r"><img alt="discord" className="img-icon" src="/Assets/discord.png" /></a>
                                <a href="https://github.com/MarcoAntonioGuadalupeRivasGuzman"><img alt="github" className="img-icon" src="/Assets/github.png" /></a>
                                <a href="mailto:stevechanvitas@gmail.com"><img className="img-icon" alt="email" src="/Assets/email.png" /></a>
                            </DivRow>
                        </DivAuto>
                    </DivRow>
                    <h1 className="title1">Power by <a className="contacto" href="https://react.dev/">React</a></h1>
                </Div70>
            </DivFooter>
        </>
    );
}

export default FooterHave;