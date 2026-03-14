import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  width: 300px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;

  &:focus {
    outline: 2px solid #ff69b4;
    border-color: transparent;
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #ff69b4;
  color: white;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: 0.2s;

  &:active {
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transform: translateY(2px);
  }
`;

function LoginForm() {
  return (
    <Container>
      <Form>
        <h2>Login</h2>

        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;