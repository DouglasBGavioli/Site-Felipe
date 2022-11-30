import "./style.min.css"

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;

}
export function Input(props: InputProps) {
    return (
        <div className="cr-input">
            {props.label && (
                <label>{props.label}</label>
            )}
            <input style={props.style} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}