import "../styles/Input.css"

const Input = (props) => {
    return ( 
        <input
        className="input"
        type="number"
        placeholder={`Digite o valor ${props.placeholder}`}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        >
        </input>
     );
}
 
export default Input;