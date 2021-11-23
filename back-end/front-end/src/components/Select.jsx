const Select = (props) => {
  return (
    <select onChange={props.onChange} name={props.name} value={props.value}>
      <option value="cm">cm</option>
      <option value="m">m</option>
      <option value="km">km</option>
    </select>
  );
};

export default Select;
