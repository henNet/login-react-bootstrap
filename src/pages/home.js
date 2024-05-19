import FormBootStrap from "../components/form-bootstrap/form-bootstrap";
import MyForm from "../components/form/form";
import SwitchMode from "../components/switche/switch";
import "./home.css";

function Home() {
  return (
    <div className="d-flex align-items-center h-100 flex-column">
      <header className="px-3 gap-4 w-100 d-flex justify-content-end">
        <SwitchMode />
      </header>

      <main className="w-100 m-auto form-container">
        <MyForm/>
        {/* <FormBootStrap /> */}
        <div className="mt-5 mb-3">@ Henrique Neto 2024 (with React)</div>
      </main>
    </div>
  );
}

export default Home;
