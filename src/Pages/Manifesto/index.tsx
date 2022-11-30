import "./style.min.css"
import { Input } from "../../Components/Input";
import axios from "axios";
import { ChangeEvent, useCallback, useState } from "react";


const INITIAL_DATA = {
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

export function Manifesto() {
    const [data, setData] = useState(INITIAL_DATA)

    function handleChangeData(e: ChangeEvent<HTMLInputElement>) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = useCallback(() => {
        axios.post('http://localhost:3001/posts', {
            mainDatas: data,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [data])

    return (
        <div className="cr-manifesto">
            <h1>MANIFESTO DE CARGA E SERVIÇO!</h1>
            <form className="cr-manifesto__form" onSubmit={onSubmit}>
                <div className="cr-manifesto__form-basicos">
                    <div>
                        <label>
                            Data
                            <Input type={"date"} id="data" placeholder="Selecione a data" value={data.data} name="data" onChange={handleChangeData} />
                        </label>
                        <label>
                            Nome do cliente
                            <Input id="clientName" placeholder="
                            Digite um nome" value={data.clientName} name="clientName" onChange={handleChangeData} />
                        </label>
                        <label>
                            Endereço
                            <Input id="addres" placeholder="
                            Digite o endereço" value={data.addres} name="addres" onChange={handleChangeData} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nome do equipamento
                            <Input id="equipamentName" placeholder="
                            Digite o nome do equipamento" value={data.equipamentName} name="equipamentName" onChange={handleChangeData} />
                        </label>
                        <label>
                            Operador
                            <Input id="operator" placeholder="
                            Digite o nome do operador" value={data.operator} name="operator" onChange={handleChangeData} />
                        </label>
                        <label>
                            Telefone
                            <Input type={"number"} id="phone" value={data.phone} name="phone" placeholder="55-99999-9999" onChange={handleChangeData} />
                        </label>
                    </div>
                </div>
                <div className="cr-manifesto__form-horimetro">
                    <label>
                        <p>HORIMETRO</p>
                        <div className="horas">
                            Início
                            <Input type={"time"} id="timeInitial" placeholder="
                            Hora inicial" value={data.timeInitial} name="timeInitial" onChange={handleChangeData} />
                            Fim
                            <Input type={"time"} id="timeFinal" placeholder="
                            Hora final" value={data.timeFinal} name="timeFinal" onChange={handleChangeData} />
                        </div>
                    </label>
                    <label>
                        <p className="horas-trabalhadas">HORAS TRABALHADAS</p>
                        {/* (calculo inicio - fim) */}
                        <span>{ }</span>
                        <div className="cr-manifesto__form-horimetro-pago">
                            Serviço pago?
                            <Input type={"checkbox"} id="servicePay" name="servicePay" onChange={() =>
                                setData({ ...data, servicePay: !data.servicePay })} />
                        </div>
                    </label>

                    <label >
                        <p> VALOR TOTAL DO SERVIÇO</p>
                        Preço da hora
                        <Input type={"number"} id="timeFinal" placeholder="Digite o preço da hora" value={data.timePreco} name="timePreco" onChange={handleChangeData} />
                        {/* (calculo baseado no valor da hora) */}
                        <p>Valor do serviço: {(data.timePreco * 2)}</p>
                    </label>
                    <label >
                        OBSERVAÇÕES
                        <textarea style={{ resize: "none" }} cols={30} rows={5} id="obs" name="obs" value={data.obs} onChange={(e: any) => handleChangeData(e)}></textarea>
                    </label>
                </div>
                <div className="cr-manifesto__form-carro">
                    <div className="cr-manifesto__form-carro-abastecimento">
                        <h1>Abastecimento</h1>
                        <div>
                            <p>Litros de diesel abastecidos no dia</p>
                            <Input type={"number"} id="fuel" placeholder="Quantidade de combustivel" value={data.fuel} name="fuel" onChange={handleChangeData} />
                        </div>
                        <button type="submit">Enviar</button>
                    </div>
                    <div className="cr-manifesto__form-carro-manutencoes">
                        <p>Anotação das manutenções</p>
                        <textarea style={{ resize: "none" }} cols={50} rows={10} id="notes" name="notes" value={data.notes} onChange={(e: any) => handleChangeData(e)}></textarea>
                    </div>
                </div>

            </form>
        </div>
    )
}
