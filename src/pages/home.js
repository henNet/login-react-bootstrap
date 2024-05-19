import { useState } from "react";
import FormBootStrap from "../components/form-bootstrap/form-bootstrap";
import MyForm from "../components/form/form";
import SwitchForm from "../components/switche/switch-form";
import SwitchMode from "../components/switche/switch-theme";
import "./home.css";

function Home() {

  const [checkForm, setCheckForm] = useState(false);

  const childDataToParent = (data) => {
    setCheckForm(data);
  }

  return (
    <div className="d-flex align-items-center h-100 flex-column">
      <header className="px-3 gap-4 w-100 d-flex justify-content-end">
        <SwitchForm childDataToParent={childDataToParent}/>
        <SwitchMode />
      </header>

      <main className="w-100 m-auto form-container">
        {checkForm ? <MyForm/> : <FormBootStrap />}
        <div className="mt-5 mb-3">@ Henrique Neto 2024 (with React)</div>
      </main>
    </div>
  );
}

export default Home;
