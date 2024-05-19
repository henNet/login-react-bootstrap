import RadioButton from "../radio-buttons/radio-buttons";

function BootstrapForm() {
  const cursos = [
    "Técnico em Computação Gráfica",
    "Técnico em Informática",
    "Técnico em Administração",
    "Técnico em Informática para a Internet",
  ];

  return (
    <form action="">
      <div class="d-flex flex-row align-items-center gap-2">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          class="mb-4"
          height="57"
          width="72"
          alt=""
        />
        <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
      </div>
      <div class="form-floating mb-2">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="you-email@gmail.com"
        />
        <label for="floatingInput">Email Adress</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingInput"
          placeholder="you-email@gmail.com"
        />
        <label for="floatingInput">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input type="checkbox" class="form-check-input" id="flexCheckDefault" />
        <label for="flexCheckDefault" class="form-check-label">
          Remember Me
        </label>
      </div>
      <h1 class="h3 mb-3 fw-normal">Please Select a course</h1>
      {cursos.map((curso) => {
        return <RadioButton curso={curso} />;
      })}
      <button class="btn btn-primary w-100 py-2">Sing in</button>
    </form>
  );
}

export default BootstrapForm;
