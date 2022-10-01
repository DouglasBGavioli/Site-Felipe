import { Input } from "../../Components/Input";

export function Manifesto() {
    return (
        <div className="cr-manifesto">
            <h1>MANIFESTO DE CARGA E SERVIÇO!</h1>
            <form className="cr-manifesto__form" onSubmit={() => console.log("enviado O FORMULARIO DO FELIPE COCOZAO")}>
                <div className="cr-manifesto__form-basicos">
                    <label>
                        DATA
                        <Input placeholder="teste" />
                    </label>
                    <label>
                        NOME DO CLIENTE
                        <Input placeholder="teste" />
                    </label>
                    <label>
                        ENDEREÇO
                        <Input placeholder="teste" />
                    </label>
                    <label>
                        NOME DO EQUIPAMENTO
                        <Input placeholder="teste" />
                    </label>
                    <label>
                        OPERADOR
                        <Input placeholder="teste" />
                    </label>
                    <label>
                        TELEFONE
                        <Input placeholder="teste" />
                    </label>
                </div>
                <div className="cr-manifesto__form-horimetro">
                    <label>
                        <p>HORIMETRO</p>
                        INICIO
                        <Input placeholder="teste" />
                        FIM
                        <Input placeholder="teste" />
                    </label>
                    <h1>HORAS TRABALHADAS(OBS)</h1>
                    (calculo inicio - fim)
                    <Input type={"checkbox"} />PAGO
                    <label >
                        <p> VALOR TOTAL DO SERVIÇO</p>
                        PREÇO DA HORA
                        <Input placeholder="teste" />
                        (calculo baseado no valor da hora)
                    </label>
                    <label >
                        OBSERVAÇÕES
                        <textarea style={{ resize: "none" }} cols={30} rows={10} ></textarea>
                    </label>
                </div>
                <div className="cr-manifesto__form-nCargas">
                    <textarea style={{ resize: "none" }}></textarea>
                </div>
                <div className="cr-manifesto__form-origem">
                    <label>
                        ORIGEM
                        <Input type={"text"} />
                        DESTINO
                        <Input type={"text"} />
                        MATERIAL
                        <Input type={"checkbox"} />ORGÂNICO
                        <Input type={"checkbox"} />ARGILA/TERRA
                        <Input type={"checkbox"} />BOTA FORA
                        <Input type={"checkbox"} />AREIA
                        <Input type={"checkbox"} />ROCHA
                        <Input type={"checkbox"} />CASCALHO
                    </label>
                </div>
                <button type="submit">Clica envias</button>
            </form>
        </div>
    )
}