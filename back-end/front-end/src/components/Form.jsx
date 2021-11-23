import "../styles/Form.css";

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      {props.children}

      <button className="button" onClick={props.onClick}>
        Calcular
      </button>
    </form>
  );
};

export default Form;
