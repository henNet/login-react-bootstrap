import { useState } from "react";

function SwitchForm({childDataToParent}) {

	const [check, setCheck] = useState(true);

	function changeForm(){
		setCheck(!check);
		childDataToParent(check);

		const label = document.querySelector("#switcheForm");

		if(label.innerHTML === "React Bootstrap Form"){
			label.innerHTML = "Bootstrap Form";
		}else{
			label.innerHTML = "React Bootstrap Form";
		}
	}

  return (
    <div class="form-check form-switch">
      <label class="form-check-label" for="flexSwitchCheck" id="switcheForm">
				React Bootstrap Form
      </label>
      <input
        onChange={changeForm}
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheck"
        checked={check}
      />
    </div>
  );
}

export default SwitchForm;
