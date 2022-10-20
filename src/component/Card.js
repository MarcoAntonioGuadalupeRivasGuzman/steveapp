import React from "react";

function Card({imgUrl,title,paragraph}){
    return(
        <div>
            <img src={imgUrl}/>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
}

export default Card;