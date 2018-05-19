import {
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  textAlign,
  color,
  background
} from "styled-system";
import { Flex } from "grid-styled";
import borderStyles from "~/styles/border";
import textColors from "~/styles/text/colors";

const Text = Flex.extend`
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${textColors}
  ${color}
  ${background}
  ${borderStyles}

  ${({ serif }) =>
    serif
      ? `font-family: 'Lora', serif`
      : `font-family: 'Quicksand', sans-serif`};

  font-style: ${({ fontStyle }) => fontStyle};
`;

Text.defaultProps = {
  fontWeight: 300,
  fontSize: 3,
  fontStyle: "normal",
  border: false,
  serif: false
};

Text.displayName = "Text";

export default Text;
