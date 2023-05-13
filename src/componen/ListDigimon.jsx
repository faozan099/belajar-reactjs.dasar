import { useState } from "react";
import Card from "./CardDigimons";



function ListDigimon(){
    
    const [digimon, setDigimon] = useState([
        {
            name: "Biyomon", gambar:"https://digimon.shadowsmith.com/img/biyomon.jpg"
        },
        {
            name: "Gabumon", gambar:"https://digimon.shadowsmith.com/img/gabumon.jpg"
        },
        {
            name: "Gomamon", gambar: "https://digimon.shadowsmith.com/img/gomamon.jpg"
        },
        {
            name: "ExVeemon", gambar: "https://digimon.shadowsmith.com/img/exveemon.jpg"
        },
        {
            name: "Valkryimon", gambar: "https://digimon.shadowsmith.com/img/valkyrimon.jpg"
        }

    ])
    
    return(
        <section className="list-digimon">
            <Card 
                img="https://digimon.shadowsmith.com/img/agumon.jpg"
                name="Agumon"
            />
            <Card
            img="https://digimon.shadowsmith.com/img/patamon.jpg"
            name="Veemon"
            />

            {digimon.map((item, index) => (
            <Card
            key={index}
            img={item.gambar}
            name={item.name}
            />
            ))}
        </section>
    )
}

export default ListDigimon;