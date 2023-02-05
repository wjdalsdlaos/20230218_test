import styled from "styled-components";
import Button from "./Button";

function TodoCreate() {
  return (
    <Container>
      <Input type="text" />
      <Button>등록</Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default TodoCreate;
