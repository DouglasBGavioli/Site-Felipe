import "./style.min.css"

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input(props: InputProps) {
    return (
        <div className="cr-input">
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}