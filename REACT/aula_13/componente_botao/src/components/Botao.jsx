import styled from "@emotion/styled";

const Botao = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  background-color: ${(props) =>
    props.tipo === "secundario" ? "#d9d9d9" : "#ff4d6d"};

  color: ${(props) =>
    props.tipo === "secundario" ? "#333" : "#fff"};

  &:hover {
    background-color: ${(props) =>
      props.tipo === "secundario" ? "#bfbfbf" : "#e63956"};
  }
`;

export default Botao;