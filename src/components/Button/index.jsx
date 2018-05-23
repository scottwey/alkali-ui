import styled from "styled-components";
import {
  space,
  width,
  fontSize,
  fontWeight,
  letterSpacing,
  themeGet,
  color,
  background
} from "styled-system";
import buttonColors from "~/styles/button/colors";
import buttonShadows from "~/styles/button/shadows";

const Button = styled.button`
  ${space}
  ${width}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${buttonColors}
  ${buttonShadows}
  ${color}
  ${background}

  text-transform: uppercase;
  outline: none;
  transition: all 0.25s ease;
  will-change: box-shadow;
  cursor: pointer;
  border: none;
  border-radius: 2px;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    box-shadow: none;
    color: ${themeGet("colors.white", "#fcfbf8")};
    background: ${themeGet("colors.grey", "#dfded9")};
    border-color: ${themeGet("colors.grey", "#dfded9")};
    opacity: 0.6;
    cursor: default;
  }
`;

Button.defaultProps = {
  bc: "primary",
  px: 4,
  py: 2,
  fontWeight: 400,
  fontSize: 2,
  letterSpacing: 6
};

Button.displayName = "Button";

export default Button;
