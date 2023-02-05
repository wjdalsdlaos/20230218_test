import { darken, lighten } from "polished";
import styled, { css, keyframes } from "styled-components";
import { theme } from "../syles";

function Button({ text, bgColor, big }) {
  return (
    <StyledButton bgColor={bgColor} big={big}>
      {text}
    </StyledButton>
  );
}

const slideUp = keyframes`
    from {
        transform : translateY(20px);
    }
`;

const StyledButton = styled.div`
  width: 200px;
  padding: 5px 0;
  border-radius: 40%;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.main};
  color: #fff;
  text-align: center;
  outline: none;
  border: none;

  animation: ${slideUp} 1s;

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      font-size: 1.2rem;
      padding: 10px;
      background-color: ${({ bgColor, theme }) => bgColor || theme.color.main};
    `}
  &:hover {
    background-color: ${({ bgColor }) => {
      return bgColor ? lighten(0.1, bgColor) : lighten(0.1, theme.colors.main);
    }};
  }
  &:active {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? darken(0.1, bgColor) : lighten(0.1, theme.colors.main);
    }};
  }
  // 첫 번째 요소 빼고 적용할 때
  & + & {
    margin-top: 10px;
  }
`;

export const BigButton = styled(StyledButton)`
  width: 250px;
  height: 200px;
  padding: 15px;
`;
export default Button;
