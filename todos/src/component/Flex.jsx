import styled from "styled-components";

function Flex() {
  return (
    <Container>
      <Item></Item>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row; //아이템의 나열 방향
  justify-content: center; //주축에 대한 나열 방법 flex-start 진행방향의 시작점 flex-end는 진행방향의 끝점
  align-items: center; //교차축에 대한 나열 방법 기본 값 stretch(늘어남)
  //flex-wrap: wrap; //공간이 ㅂ주ㅗㄱ할 때 아이템의 줄바꿈 여부 지정
  width: 500px;
  height: 300px;
  border: 3px solid red;
`;
const Item = styled.div`
  //width: 100px;
  height: 100px;
  background: black;
  color: #fff;
  border: 2px solid green;

  flex-basis: 200px; //아이템의 최소 너비, 기준점

  &:nth-child(1) {
    flex-grow: 1; //공간이 남았을 때 여백ㅇ들 가져가는 비율
    flex-shrink: 0; //공간이 부족할 때 줄이는 비용
  }
  &:nth-child(2) {
    //flex-grow: 2;
    flex: 1 1 0; //단축 속성 grow,shirink, basis 순
  }
`;
export default Flex;
