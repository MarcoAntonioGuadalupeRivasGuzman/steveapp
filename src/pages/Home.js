import React from "react";
import Baner from "../component/Baner";
import Videos from "../component/Videos";
import "../App.css";
import Discord from "../component/Discord";
import Review from "../component/Review";
import Canal from "../component/Canal";
import Footer from "../component/Pie";
import Pie from "../component/Pie";
import Branding from "../component/Branding";



function Home(){
    return(
        <>
        <Baner/>
        <div className="Contenedor">
            <h3 className="title1">Videos con mas visitas</h3>   
        </div>
        <Videos/>
        <Branding name={"Discord"} 
        title={"Un servidor de discord con temas de videojuegos e informatica"}
        url={"https://discord.gg/QTdVBq5Q9r"}
        />
        
        <div className="Contenedor">
            <h3 className="title1">Reviews mas recientes</h3>
        </div>
        <Review/>
        <Branding name={"Canal"}
        title={"Un canal dedicado a los temas de informatica, videojuegos y techrunners"}
        url={"https://www.youtube.com/channel/UCsaZsVCeb3BkqBrROgc1uhw"}
        />
        <Pie/>
        </>
    );
}

export default Home;