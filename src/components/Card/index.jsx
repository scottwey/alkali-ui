import {
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  color,
  background
} from "styled-system";
import { Flex } from "grid-styled";
import cardColors from "~/styles/card/colors";
import cardShadows from "~/styles/card/shadows";

const Card = Flex.extend`
  ${color}
  ${background}
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${cardColors}
  ${cardShadows}

  border-radius: 5px;
  font-style: ${({ fontStyle }) => fontStyle};
`;

Card.defaultProps = {
  cc: "light",
  fontWeight: 300,
  fontSize: 3,
  fontStyle: "normal",
  border: false,
  p: 4,
  flexDirection: "column"
};

Card.displayName = "Card";

export default Card;
