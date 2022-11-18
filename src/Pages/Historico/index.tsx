import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Input } from "../../Components/Input";

export function Historico() {
    const [data, setData] = useState<any>([])
    const [operator, setOperator] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3001/posts', {
        })
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const verifica = useCallback(() => {
        data.map((e: any) => {
            if (e.mainDatas.operator === operator) {
                return console.log(e)
            } else {
                return console.log("nao encontrado");
            }
        })
    }, [operator, data])

    return (
        <div>
            <Input value={operator} onChange={(e) => setOperator(e.target.value)} />
            <button onClick={() => verifica()}>Verifica</button>
        </div>
    )
}