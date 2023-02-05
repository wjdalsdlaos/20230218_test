//import "./App.css"; //webpack 이라는 도구가 css, 이미지 파일 등 정적파일을 로딩할 수 있게 도와준다.
//import Button, { BigButton } from "./component/Button";
//import styles from "./style.module.css"; //해시값을 사용하여 id, class의 중복됨을 방지해준다.
//import "./style.scss";
import TodoCreate from "./component/TodoCreate";
import TodoHeader from "./component/TodoHeader";
import TodoList from "./component/TodoList";
import styled, { createGlobalStyle } from "styled-components";
import Flex from "./component/Flex";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color : inherit;
  }
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TodoHeader />
      <TodoList />
      <TodoCreate />
      <Flex></Flex>
    </Container>
  );
}

const Container = styled.div`
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default App;
