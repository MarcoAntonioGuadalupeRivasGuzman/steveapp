import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCharacter from "../../component/CardCharacter";

function Characters() {

    const [personajes, setPersonajes] = useState([]);

    const listCharacters = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            console.log(response.data.results);
            setPersonajes(response.data.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        listCharacters();
    }, []);

    return (
        <>
            <h1 className="title1">Characters Page</h1>
            {
                personajes.map(perso=>
                        <CardCharacter character={perso} />
                    )
            }
        </>
    );
}

export default Characters;