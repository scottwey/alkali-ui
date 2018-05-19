import styled from "styled-components";
import { color, space, width } from "styled-system";

const Input = styled.input`
  ${color}
  ${space}
  ${width}

  will-change: background;
  -webkit-appearance: none;
  outline: none;
  background: rgba(190, 190, 190, 0.2);
  border: 1px solid rgba(200, 200, 200, 0.3);
  font-size: 1.3rem;
  height: 2.3rem;
  line-height: 2.3rem;
  transition: border 0.3s linear;
  box-sizing: border-box;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1), inset 0 0 4px rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(170, 170, 170, 0.35);
  }
  &:focus {
    border: 1px solid currentColor;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1),
      inset 0 0 4px rgba(0, 0, 0, 0.2), 0 0 15px rgba(200, 200, 200, 0.2),
      0 0 30px rgba(200, 200, 200, 0.15);
  }
`;

Input.defaultProps = {
  color: "inherit",
  w: 1,
  px: 1
};

Input.displayName = "Input";

export default Input;
