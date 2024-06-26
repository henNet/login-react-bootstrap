import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RadioButton from "../radio-buttons/radio-buttons";

function ReactBootStrapForm(props) {
  const cursos = [
    "Técnico em Computação Gráfica",
    "Técnico em Informática",
    "Técnico em Administração",
    "Técnico em Informática para a Internet",
  ];

  return (
    <>
      <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
      <Form className="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <h1 class="h3 mb-3 fw-normal">Please Select a course</h1>
        {cursos.map((curso) => {
          return <RadioButton curso={curso} />;
        })}

        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ReactBootStrapForm;
