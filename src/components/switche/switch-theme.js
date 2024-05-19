import { useState } from "react";

function SwitchMode() {

  const [check, setCheck] = useState(true);

  function modeLight() {
    var html = document.querySelector("html");
    html.setAttribute("data-bs-theme", "light");
  }

  function modeDark() {
    var html = document.querySelector("html");
    html.setAttribute("data-bs-theme", "dark");
  }

  function mode(){
    var label = document.querySelector("#switche");

    if(label.textContent.trim() === "Dark"){
        modeLight();
        setCheck(false);
        label.innerHTML = "Light";
    }else{
        setCheck(true);
        modeDark();
        label.innerHTML = "Dark";
    }
  }

  return (
    <div class="form-check form-switch">
      <label class="form-check-label" for="flexSwitchCheckChecked" id="switche">
        Dark
      </label>
      <input
        onChange={mode}
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={check}
      />
    </div>
  );
}

export default SwitchMode;
