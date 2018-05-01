import {
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  textAlign
} from "styled-system";
import { Flex } from "grid-styled";
import borderStyles from "styles/border";
import textColors from "styles/text/colors";

const Text = Flex.extend`
  ${({ serif }) =>
    serif
      ? `font-family: 'Lora', serif`
      : `font-family: 'Quicksand', sans-serif`};
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${borderStyles}
  ${textColors}
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
