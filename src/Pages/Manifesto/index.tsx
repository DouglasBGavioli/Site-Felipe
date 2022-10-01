import "./style.min.css"

import { Input } from "../../Components/Input";

export function Manifesto() {

    return (
        <div className="cr-manifesto">
            <h1>MANIFESTO DE CARGA E SERVIÇO!</h1>
            <form className="cr-manifesto__form" onSubmit={() => console.log("enviado O FORMULARIO DO FELIPE COCOZAO")}>
                <div className="cr-manifesto__form-basicos">
                    <div>
                        <label>
                            Data
                            <Input type={"date"} />
                        </label>
                        <label>
                            Nome do cliente
                            <Input placeholder="Digite um nome" />
                        </label>
                        <label>
                            Endereço
                            <Input placeholder="Digite um endereço" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nome do equipamento
                            <Input placeholder="Digite o nome do equipamento" />
                        </label>
                        <label>
                            Operador
                            <Input placeholder="Digite o nome do operador" />
                        </label>
                        <label>
                            Telefone
                            <Input type={"number"} placeholder="55-99999-9999" />
                        </label>
                    </div>
                </div>
                <div className="cr-manifesto__form-horimetro">
                    <label>
                        <p>HORIMETRO</p>
                        <div className="horas">
                            Início
                            <Input placeholder="Hora inicial" />
                            Fim
                            <Input placeholder="Hora final" />
                        </div>
                    </label>
                    <label>
                        <p className="horas-trabalhadas">HORAS TRABALHADAS</p>
                        {/* (calculo inicio - fim) */}
                        <span>21.3 Horas</span>
                        <div className="cr-manifesto__form-horimetro-pago">
                            Serviço pago?
                            <Input type={"checkbox"} className="checkbox" />
                        </div>
                    </label>

                    <label >
                        <p> VALOR TOTAL DO SERVIÇO</p>
                        Preço da hora
                        <Input placeholder="Digite o preço da hora" />
                        {/* (calculo baseado no valor da hora) */}
                        7.000.00
                    </label>
                    <label >
                        OBSERVAÇÕES
                        <textarea style={{ resize: "none" }} cols={30} rows={5} ></textarea>
                    </label>
                </div>
                <div className="cr-manifesto__form-carro">
                    <div className="cr-manifesto__form-carro-abastecimento">
                        <h1>Abastecimento</h1>
                        <div>
                            <p>Litros de diesel abastecidos no dia</p>
                            <Input type={"number"} placeholder="Quantidade de combustivel" />
                        </div>
                        <button type="submit">Enviar</button>
                    </div>
                    <div className="cr-manifesto__form-carro-manutencoes">
                        <p>Anotação das manutenções</p>
                        <textarea cols={50} rows={10}></textarea>
                    </div>
                </div>

            </form>
        </div>
    )
}