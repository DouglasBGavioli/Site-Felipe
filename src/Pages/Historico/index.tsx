import axios from "axios";
import { useEffect, useState } from "react";

export function Historico() {
    const [data, setData] = useState("")
    const [operador, setOperador] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3001/posts', {
        })
            .then(function (response) {
                console.log(response);
                setData(response.data[0].data)
                setOperador(response.data[2].operador)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div>
            <p>DATA</p>
            <span>{data}</span>
            <p>OPERADOR</p>
            <span>{operador}</span>
        </div>
    )
}