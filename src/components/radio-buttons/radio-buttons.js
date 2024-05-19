function RadioButton(props) {
  return (
    <div class="form-check text-start my-3">
      <input name="curso" type="radio" class="form-check-input" id={props.curso} />
      <label for={props.curso} class="form-check-label">
        {props.curso}
      </label>
    </div>
  );
}

export default RadioButton;
