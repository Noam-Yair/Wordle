import {useEffect, useState} from "react";

function GenerateWord() {

    const [word, setWord] = useState('');
    const fetchData = () => {
        return fetch("https://localhost:8080/random")
            .then((response) => response.json())
            .then((data) => setWord(data));
    }


    useEffect(() => {
        fetchData();
    },[])
    return (
        <div>

        </div>
    )
}

export default GenerateWord