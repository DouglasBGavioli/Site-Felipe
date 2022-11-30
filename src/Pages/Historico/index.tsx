import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Input } from "../../Components/Input";

import "./style.min.css"

interface arrTeste {
    mainDatas: {
        data: "",
        clientName: "",
        addres: "",
        equipamentName: "",
        operator: "",
        phone: "",
        timeInitial: 0,
        timeFinal: 0,
        servicePay: false,
        timePreco: 0,
        obs: "",
        fuel: "",
        notes: ""
    }
}

export function Historico() {
    const [data, setData] = useState<arrTeste[]>([])
    const [tempData, setTempData] = useState<arrTeste[]>([])

    const [cliente, setCliente] = useState("")
    const [day, setDay] = useState("")
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
    }, [data])

    function verifica() {
        const arrTemp = (data?.filter(item => item.mainDatas?.operator === operator));
        setTempData(arrTemp)
    }

    return (
        <div className="historic">
            <form>
                <h1>Buscar manifestos</h1>
                <Input label="Buscar pelo operador" value={operator} placeholder="Buscar pelo do operador" onChange={(e) => setOperator(e.target.value)} />

                <Input label="Buscar pelo cliente" value={operator} placeholder="Buscar pelo cliente" onChange={(e) => setCliente(e.target.value)} />

                <Input label="Filtrar pela data" value={operator} placeholder="Data" onChange={(e) => setDay(e.target.value)} />
                <button type="button" onClick={() => verifica()}>Buscar</button>
            </form>

            <div className="historic__content">
                <div className="historic__content-manifesto">
                    <h1>MANIFESTO DE CARGA E SERVIÇO!</h1>
                    {
                        tempData.map((item, index) => (
                            <div className="historic__content-manifesto__form" >
                                <div className="historic__content-manifesto__form-basicos">
                                    <div>
                                        <label>
                                            Data
                                            <h3>{item.mainDatas.data}</h3>
                                        </label>
                                        <label>
                                            Nome do cliente
                                            <h3>{item.mainDatas.clientName}</h3>
                                        </label>
                                        <label>
                                            Endereço
                                            <h3>{item.mainDatas.addres}</h3>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Nome do equipamento
                                            <h3>{item.mainDatas.equipamentName}</h3>
                                        </label>
                                        <label>
                                            Operador
                                            <h3>{item.mainDatas.operator}</h3>
                                        </label>
                                        <label>
                                            Telefone
                                            <h3>{item.mainDatas.phone}</h3>
                                        </label>
                                    </div>
                                </div>
                                <div className="historic__content-manifesto__form-horimetro">
                                    <label>
                                        <p>HORIMETRO</p>
                                        <div className="horas">
                                            Início
                                            <h3>{item.mainDatas.timeInitial}</h3>
                                            Fim
                                            <h3>{item.mainDatas.timeFinal}</h3>
                                        </div>
                                    </label>
                                    <label>
                                        <p className="horas-trabalhadas">HORAS TRABALHADAS</p>
                                        {/* (calculo inicio - fim) */}
                                        horas trab
                                        <div className="historic__content-manifesto__form-horimetro-pago">
                                            Serviço pago?
                                            <h3>{item.mainDatas.servicePay ? "SIM" : "NÃo"}</h3>
                                        </div>
                                    </label>

                                    <label >
                                        <p> VALOR TOTAL DO SERVIÇO</p>
                                        Preço da hora
                                        <h3>R${item.mainDatas.timePreco}</h3>
                                        {/* (calculo baseado no valor da hora) */}
                                        <p>Valor do serviço: {(item.mainDatas.timePreco * 2)}</p>
                                    </label>
                                    <label >
                                        OBSERVAÇÕES
                                        <h3>{item.mainDatas.obs}</h3>
                                    </label>
                                </div>
                                <div className="historic__content-manifesto__form-carro">
                                    <div className="historic__content-manifesto__form-carro-abastecimento">
                                        <h1>Abastecimento</h1>
                                        <div>
                                            <p>Litros de diesel abastecidos no dia:</p>
                                            <h3>{item.mainDatas.fuel}</h3>
                                        </div>
                                    </div>
                                    <div className="historic__content-manifesto__form-carro-manutencoes">
                                        <p>Anotação das manutenções</p>
                                        <h3>{item.mainDatas.notes}</h3>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}