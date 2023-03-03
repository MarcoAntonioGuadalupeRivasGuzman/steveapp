import React from "react";
import Baner from "../component/Baner";
import Videos from "../component/Videos";
import "../App.css";
import Discord from "../component/Discord";
import Review from "../component/Review";
import Canal from "../component/Canal";
import Footer from "../component/Pie";
import Pie from "../component/Pie";



function Home(){
    return(
        <>
        <Baner/>
        <div className="Contenedor">
            <h3 className="title1">Videos con mas visitas</h3>
            <Videos/>
            <Discord/>
        </div>
        
        <div className="Contenedor">
            <h3 className="title1">Reviews mas recientes</h3>
            <Review/>
            <Canal/>
        </div>
        <Pie/>
        </>
    );
}

export default Home;