import { useState } from "react";

function Profile(){
    const [name, setName] = useState("Faozan")
    const [umur, setUmur] = useState("??")

    return (
        <div>
            <h2 onClick={() => setName("Marvelous")}>Nama : {name}</h2>
            <h2 onClick={() => setUmur("!!")}>Umur : {umur}</h2>
        </div>
    )
}

export default Profile;